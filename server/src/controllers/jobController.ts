import type { Request, Response } from "express";
import Job from "../models/Job.js";

export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find({ published: true })
      .sort({ createdAt: -1 })
      .lean();

    res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    console.log("Get Jobs Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch jobs" });
  }
};

export const createJob = async (req: Request, res: Response) => {
  try {
    const { title, department, location, type, description, published } = req.body;

    if (!title || !description) {
      res.status(400).json({
        success: false,
        message: "Title and Description are required",
      });
      return;
    }

    const job = await Job.create({
      title,
      department,
      location,
      type,
      description,
      published,
    });

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    console.log("Create Jobs Error:", error);
    res.status(500).json({ success: false, message: "Failed to create job" });
  }
};