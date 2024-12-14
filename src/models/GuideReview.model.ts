import mongoose, { Schema, Document } from "mongoose";

// export interface IGuideReview extends Document {
//   guide: mongoose.Types.ObjectId;
//   user: mongoose.Types.ObjectId;
//   rating: number;
//   comments?: string;
// }

const GuideReviewSchema = new mongoose.Schema(
  {
    guide: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guide",
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comments: { type: String },
  },
  { timestamps: true }
);

const GuideReview = mongoose.model("GuideReview", GuideReviewSchema);

export default GuideReview;
