import express from 'express'
import { Signup } from '../controllers/AuthController.js';

const authRoutes = express.Router();

authRoutes.post('/signup',Signup)

export default authRoutes;