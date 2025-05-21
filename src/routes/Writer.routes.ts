import { Router } from "express";
import { createWriter, getWriters } from "../controllers/Writer.controller";

const router = Router();
router.post("/", createWriter);
router.get("/", getWriters);
export default router; 