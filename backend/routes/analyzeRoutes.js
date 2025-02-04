import express from "express";
import { analyzeAdPerformance } from "../controllers/analyzeController.js";

const router = express.Router();
router.post("/", analyzeAdPerformance);

export default router;
