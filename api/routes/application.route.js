import express from "express";
// import { addApplication, getApplication } from "../controller/application.controller.js";
import { addApplication, getApplication } from "../controller/app.controller.js";
const router = express.Router();

// router.get("/getApplication", getApplication);
router.post("/addApplication", addApplication);
router.post("/getApplication", getApplication);

export default router;
