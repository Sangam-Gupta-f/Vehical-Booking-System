import express from "express";
import {addVehicle, available} from "../controllers/VehicleController.js";

const router=express.Router();

router.post('/add', addVehicle);
router.post('/available', available)

export default router;
