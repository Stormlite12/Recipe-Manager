import express from 'express';
import { registerUser, loginUser, logoutUser, checkAuth } from '../controllers/authController.js';
import { getUserInfo } from '../controllers/userId.js';
import { verifyAccessToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser); // Ensure this route is defined
router.get('/checkAuth', checkAuth);
router.get('/info', verifyAccessToken, getUserInfo); // GET /api/user/info    


export default router;