import mongoose from "mongoose";

// export interface IConversation extends Document {
//   participants: { participant: mongoose.Types.ObjectId; participantModel: 'User' | 'Guide' }[];
//   lastMessage?: mongoose.Types.ObjectId;
//   isGroupChat: boolean;
// }

const ConversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        participant: {
          type: mongoose.Schema.Types.ObjectId,
          refPath: "participants.participantModel",
        },
        participantModel: { type: String, enum: ["User", "Guide"] },
      },
    ],
    lastMessage: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
    isGroupChat: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", ConversationSchema);

export default Conversation;
