import express from 'express'
import { Login, Signup } from '../controllers/AuthController.js';

const authRoutes = express.Router();

authRoutes.post('/signup',Signup)
authRoutes.post('/login',Login)

export default authRoutes;