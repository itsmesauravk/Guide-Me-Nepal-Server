import mongoose from "mongoose";

// export interface IPackageBooking extends Document {
//   user: mongoose.Types.ObjectId;
//   package: mongoose.Types.ObjectId;
//   status: {
//     bookingStatus: 'pending' | 'accepted' | 'rejected';
//     travelStatus: 'not started' | 'started' | 'completed';
//   };
// }

const PackageBookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },
    details: {
      adult: { type: String },
      children: { type: String },
      date: { type: String },
    },
    status: {
      bookingStatus: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
      travelStatus: {
        type: String,
        enum: ["not started", "started", "completed"],
        default: "not started",
      },
    },
  },
  { timestamps: true }
);

const PackageBooking = mongoose.model("PackageBooking", PackageBookingSchema);

export default PackageBooking;
