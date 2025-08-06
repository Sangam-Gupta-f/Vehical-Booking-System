import express from "express";
import {addVehicle, available, getVehicle} from "../controllers/VehicleController.js";
import authMiddleware from "../middlewares/auth.js";

const router=express.Router();

router.post('/add',authMiddleware, addVehicle);
router.get('/available', authMiddleware, available);
router.get('/get-vehicle', authMiddleware, getVehicle);

export default router;
