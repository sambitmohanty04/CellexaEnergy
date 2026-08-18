import { Router } from "express";
import { getMenu, getSubmenu } from "../controllers/menuController.js";
const router = Router();
router.get("/", getMenu);
router.get("/submenu", getSubmenu);
export default router;
//# sourceMappingURL=menuRoutes.js.map