import mongoose from "mongoose";

// export interface IUser extends Document {
//   email: string;
//   password: string;
//   contact: string;
//   authMethod: 'local' | 'google' | 'facebook';
//   otp?: { code: string; expiresAt: Date };
//   refreshToken?: string;
//   securityMetadata: {
//     lastPassword: string;
//     wrongPasswordCounter: number;
//     isSuspended: boolean;
//   };
//   bookingHistory: mongoose.Types.ObjectId[];
// }

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    contact: { type: String, required: true },
    authMethod: {
      type: String,
      enum: ["local", "google", "facebook"],
      default: "local",
    },
    otp: { code: String, expiresAt: Date },
    refreshToken: { type: String },
    securityMetadata: {
      lastPassword: String,
      wrongPasswordCounter: { type: Number, default: 0 },
      isSuspended: { type: Boolean, default: false },
    },
    bookingHistory: [
      { type: mongoose.Schema.Types.ObjectId, ref: "CustomizeBooking" },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
