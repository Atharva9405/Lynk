import express from "express";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import {
  CreateChannel,
  getUserChannels,
} from "../controllers/ChannelController.js";

const channelRoutes = express.Router();

channelRoutes.post("/create-channel", verifyToken, CreateChannel);
channelRoutes.get("/get-user-channels", verifyToken, getUserChannels);

export default channelRoutes;
