import express from 'express';
import { json } from 'body-parser';
import { createMessageRouter } from './routes/create-new';
import { messagesRouter } from './routes/get-all';
import { deleteMessagesRouter } from './routes/delete';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

app.use(messagesRouter);
app.use(createMessageRouter);
app.use(deleteMessagesRouter);

export { app };
