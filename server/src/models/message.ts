import mongoose from 'mongoose';

interface MessageAttrs {
	text: string;
}

interface MessageDoc extends mongoose.Document {
	text: string;
}

interface MessageModel extends mongoose.Model<MessageDoc> {
	build(attrs: MessageAttrs): MessageDoc;
}

const messageSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			required: true
		}
	},
	{
		toJSON: {
			transform: (doc, ret) => {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
			}
		}
	}
);

messageSchema.statics.build = (attrs: MessageAttrs): MessageDoc => {
	return new Message(attrs);
};

const Message = mongoose.model<MessageDoc, MessageModel>('Message', messageSchema);

export { Message };
