import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema(
  {
    title: { type: String, required: true },
    department: { type: String, default: null },
    location: { type: String, default: "Remote" },
    type: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Contract"],
      default: "Full-time",
    },
    description: { type: String, required: true },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);