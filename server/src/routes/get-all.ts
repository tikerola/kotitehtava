import express, { Request, Response } from 'express';
import { Message } from '../models/message';

const router = express.Router();

router.get('/api/messages', async (req: Request, res: Response) => {
	try {
		const messages = await Message.find({});
		res.send(messages);
	} catch (err) {
		res.send({
			error: 'Something went wrong'
		});
	}
});

export { router as messagesRouter };
