import mongoose from "mongoose";

// export interface ICustomizeBooking extends Document {
//   user: mongoose.Types.ObjectId;
//   guide: mongoose.Types.ObjectId;
//   bookingDetails: {
//     destination: string;
//     startingLocation: string;
//     numberOfAdults: number;
//     numberOfChildren: number;
//     estimatedDays: number;
//     estimatedPrice: number;
//   };
//   status: {
//     bookingStatus: 'pending' | 'accepted' | 'rejected';
//     travelStatus: 'not started' | 'started' | 'completed';
//   };
//   platformLiability: boolean;
// }

const CustomizeBookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    guide: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guide",
      required: true,
    },
    bookingDetails: {
      destination: { type: String },
      startingLocation: { type: String },
      numberOfAdults: { type: Number },
      numberOfChildren: { type: Number },
      estimatedDays: { type: Number },
      estimatedPrice: { type: Number },
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
    platformLiability: { type: Boolean, default: false }, //this field is for whether the platform is liable (responsible) for the booking or not
  },
  { timestamps: true }
);

const CustomizeBooking = mongoose.model(
  "CustomizeBooking",
  CustomizeBookingSchema
);

export default CustomizeBooking;
