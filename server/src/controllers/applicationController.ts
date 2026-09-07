import type { Request, Response } from 'express';
import Application from '../models/Application.js';
import Job from '../models/Job.js';

export const createApplication = async (req: Request, res: Response) => {
    try {
        const { job, name, email, phone, coverLetter } = req.body;

        if (!job || !name || !email || !phone) {
            res.status(400).json({
                success: false,
                message: "Job, name, email and phone are required"
            })
            return;
        }

        if (!req.file) {
            res.status(400).json({
                success: false,
                message: "Resume file is required"
            })
            return;
        }

        const jobExists = await Job.findById(job);
        
        if (!jobExists) {
            res.status(404).json({ success: false, message: "Job not found" });
            return;
        }

        const application = await Application.create({
            job,
            name,
            email,
            phone,
            coverLetter,
            resumeUrl: `/uploads/resumes/${req.file.filename}`,
            resumeOriginalName: req.file.originalname,
        })

        res.status(201).json({
            success: true,
            message: "Application submitted successfully",
            data: application,
        });
    } catch (error) {
        console.log("Create Application Error:", error);
        res.status(500).json({ success: false, message: "Failed to submit application" });
    }
}