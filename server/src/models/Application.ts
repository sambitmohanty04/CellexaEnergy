import mongoose, { Schema } from "mongoose";

const applicationSchema = new Schema(
  {
    job: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    coverLetter: { type: String, default: null },
    resumeUrl: { type: String, required: true },
    resumeOriginalName: { type: String, required: true },
    status: {
      type: String,
      enum: ["received", "reviewing", "rejected", "hired"],
      default: "received",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);