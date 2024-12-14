import mongoose from "mongoose";

// export interface IGuide extends Document {
//   fullname: string;
//   email: string;
//   contact: string;
//   password: string;
//   profile: {
//     languageSpeak: string[];
//     verified: boolean;
//     registrationStatus: 'pending' | 'registered';
//     certificationPhotos: string[];
//     selfVideo?: string;
//     guidingAreas: string[];
//     aboutMe?: string;
//     experiences: string[];
//     gallery: { type: string; mediaType: 'photo' | 'video' }[];
//   };
//   securityMetadata: {
//     lastPassword: string;
//     wrongPasswordCounter: number;
//     isSuspended: boolean;
//   };
//   availability: {
//     isActivate: boolean;
//     isAvailable: boolean;
//   };
//   otp?: { code: string; expiresAt: Date };
//   refreshToken?: string;
// }

const GuideSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    contact: { type: String, required: true },
    password: { type: String, required: true },
    profile: {
      languageSpeak: [String],
      verified: { type: Boolean, default: false },
      registrationStatus: {
        type: String,
        enum: ["pending", "registered", "rejected"],
        default: "pending",
      },
      certificationPhotos: [String],
      selfVideo: String,
      guidingAreas: [String],
      aboutMe: String,
      experiences: [String],
      gallery: [
        {
          type: String,
          mediaType: { type: String, enum: ["photo", "video"] },
        },
      ],
    },
    securityMetadata: {
      lastPassword: String,
      wrongPasswordCounter: { type: Number, default: 0 },
      isSuspended: { type: Boolean, default: false },
    },
    availability: {
      isActivate: { type: Boolean, default: false },
      isAvailable: { type: Boolean, default: true },
    },
    otp: { code: String, expiresAt: Date },
    refreshToken: { type: String },
  },
  { timestamps: true }
);

const Guide = mongoose.model("Guide", GuideSchema);

export default Guide;