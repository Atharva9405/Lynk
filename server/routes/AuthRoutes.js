import express from 'express'
import { getUserInfo, Login, Signup,updateProfile } from '../controllers/AuthController.js';
import { verifyToken } from '../middlewares/AuthMiddleware.js';

const authRoutes = express.Router();

authRoutes.post('/signup',Signup)
authRoutes.post('/login',Login)
authRoutes.get('/user-info',verifyToken ,getUserInfo)
authRoutes.post('/update-profile',verifyToken,updateProfile)

export default authRoutes;