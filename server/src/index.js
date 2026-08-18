import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import menuRoutes from "./routes/menuRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
const app = express();
const allowedOrigins = [
    "http://localhost:5173",
    process.env.FRONTEND_URL,
].filter((origin) => Boolean(origin));
app.use(cors({
    origin: (origin, callback) => {
        if (!origin) {
            return callback(null, true);
        }
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
}));
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).send("Server Running");
});
app.use("/api/menu", menuRoutes);
app.use("/api/contactus", contactRoutes);
app.use("/api", authRoutes);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API route not found",
    });
});
export default app;
//# sourceMappingURL=index.js.map