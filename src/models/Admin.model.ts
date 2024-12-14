import mongoose from "mongoose";

// export interface IAdmin extends Document {
//   fullname: string;
//   email: string;
//   contact: string;
//   password: string;
//   securityMetadata: {
//     wrongPasswordCounter: number;
//     isSuspended: boolean;
//   };
//   otp?: { code: string; expiresAt: Date };
//   refreshToken?: string;
// }

const AdminSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    contact: { type: String, required: true },
    password: { type: String, required: true },
    securityMetadata: {
      wrongPasswordCounter: { type: Number, default: 0 },
      isSuspended: { type: Boolean, default: false },
    },
    otp: { code: String, expiresAt: Date },
    refreshToken: { type: String },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;
