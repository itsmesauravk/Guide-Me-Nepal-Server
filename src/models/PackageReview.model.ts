import mongoose from "mongoose";

// export interface IPackageReview extends Document {
//   user: mongoose.Types.ObjectId;
//   package: mongoose.Types.ObjectId;
//   rating: number;
//   comments?: string;
// }

const PackageReviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },
    rating: { type: Number, min: 1, max: 5, required: true },
    comments: { type: String },
  },
  { timestamps: true }
);

const PackageReview = mongoose.model("PackageReview", PackageReviewSchema);

export default PackageReview;
