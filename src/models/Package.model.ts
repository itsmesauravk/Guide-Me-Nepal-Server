import mongoose from "mongoose";

// export interface IPackage extends Document {
//   guide: mongoose.Types.ObjectId;
//   title: string;
//   pricing: {
//     pricePerAdult: number;
//     pricePerChild: number;
//   };
//   details: {
//     overview: string;
//     itinerary: string[];
//     costIncluded: string[];
//     costExcluded: string[];
//     languageSpeak: string[];
//     location: string;
//   };
//   images: string[];
//   status: {
//     isSuspended: boolean;
//     isActivated: boolean;
//   };
//   analytics: {
//     views: number;
//     totalRequests: number;
//     totalBookings: number;
//   };
// }

const PackageSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guide",
      required: true,
    },
    title: { type: String, required: true },
    pricing: {
      pricePerAdult: { type: Number, required: true },
      pricePerChild: { type: Number, required: true },
    },
    details: {
      overview: { type: String },
      itinerary: [
        {
          day: { type: Number },
          title: { type: String },
          description: { type: String },
        },
      ],
      costIncluded: [String],
      costExcluded: [String],
      languageSpeak: [String],
      location: { type: String },
    },
    images: [String],
    status: {
      isSuspended: { type: Boolean, default: false },
      isActivated: { type: Boolean, default: true },
    },
    analytics: {
      views: { type: Number, default: 0 },
      totalRequests: { type: Number, default: 0 },
      totalBookings: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

const Package = mongoose.model("Package", PackageSchema);

export default Package;
