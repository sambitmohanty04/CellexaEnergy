import { Router } from "express";
import { login } from "../controllers/authController.js";

const router = Router();

router.post("/users", login);

export default router;
