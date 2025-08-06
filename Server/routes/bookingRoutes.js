import express from 'express';
import { createBooking, getBooking} from '../controllers/BookingController.js';
import authMiddleware from '../middlewares/auth.js';

const router=express.Router();

router.post('/create',authMiddleware ,createBooking);
router.get('/getbooking',authMiddleware ,getBooking);

export default router;