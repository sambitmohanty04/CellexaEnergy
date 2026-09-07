import { Router } from "express"
import { getJobs, createJob } from "../controllers/jobController.js";
import { createApplication } from "../controllers/applicationController.js";
import { uploadResume } from "../middleware/uploadResume.js"

const router = Router();

router.get("/jobs", getJobs);
router.post("/jobs", createJob);
router.post("/applications", uploadResume, createApplication);

export default router;