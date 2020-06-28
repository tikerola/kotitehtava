import { app } from './app';
require('dotenv').config();
import mongoose from 'mongoose';

const url = process.env.MONGODB_URI;
const port: string = process.env.PORT ? process.env.PORT : '3001';

if (url) {
	mongoose
		.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then(() => console.log('Connected to a database'))
		.catch(() => console.log('Unable to connect to a database'));
}

app.listen(port, (): void => {
	console.log(`Listening on port ${port}`);
});
