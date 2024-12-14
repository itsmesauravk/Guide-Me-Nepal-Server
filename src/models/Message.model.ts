import mongoose from "mongoose";

// export interface IMessage extends Document {
//   conversation: mongoose.Types.ObjectId;
//   sender: mongoose.Types.ObjectId;
//   senderModel: 'User' | 'Guide';
//   content: string;
//   contentType: 'text' | 'image' | 'video' | 'file';
//   isRead: boolean;
//   metadata?: any;
// }

const MessageSchema = new mongoose.Schema(
  {
    conversation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "senderModel",
      required: true,
    },
    senderModel: { type: String, enum: ["User", "Guide"] },
    content: { type: String, required: true },
    contentType: {
      type: String,
      enum: ["text", "image", "video", "file"],
      default: "text",
    },
    isRead: { type: Boolean, default: false },
    metadata: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);

export default Message;
