import express from 'express'
import { getUserInfo, Login, Signup } from '../controllers/AuthController.js';
import { verifyToken } from '../middlewares/AuthMiddleware.js';

const authRoutes = express.Router();

authRoutes.post('/signup',Signup)
authRoutes.post('/login',Login)
authRoutes.get('/user-info',verifyToken ,getUserInfo)

export default authRoutes;