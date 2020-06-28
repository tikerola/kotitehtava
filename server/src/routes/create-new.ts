import express, { Request, Response } from 'express';
import { Message } from '../models/message';

const router = express.Router();

router.post('/api/messages', async (req: Request, res: Response) => {
	const { text } = req.body;

	const message = Message.build({
		text
	});

	await message.save();

	res.send(message);
});

export { router as createMessageRouter };
