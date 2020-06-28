import express, { Request, Response } from 'express';
import { Message } from '../models/message';

const router = express.Router();

router.delete('/api/delete', async (req: Request, res: Response) => {
	try {
		await Message.deleteMany({});
		res.send('Database deleted!');
	} catch (err) {
		res.send({
			error: 'Something went wrong'
		});
	}
});

export { router as deleteMessagesRouter };
