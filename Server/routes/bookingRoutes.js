import express from 'express';
import { createBooking} from '../controllers/BookingController.js';

const router=express.Router();

router.post('/create', createBooking);

export default router;