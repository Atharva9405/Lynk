import express from "express";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { getMessages } from "../controllers/MessagesController.js";

const messagesRoutes = express.Router();

messagesRoutes.post("/get-messages", verifyToken, getMessages);

export default messagesRoutes;
