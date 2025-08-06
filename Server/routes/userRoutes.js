import express from 'express';
import { register, login, profile } from '../controllers/UserController.js';
import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, profile);

export default router;
