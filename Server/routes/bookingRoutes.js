import express from 'express';
import { createBooking} from '../controllers/BookingController.js';
import authMiddleware from '../middlewares/auth.js';

const router=express.Router();

router.post('/create',authMiddleware ,createBooking);

export default router;