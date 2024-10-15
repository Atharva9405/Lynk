import express from 'express'
import {verifyToken} from '../middlewares/AuthMiddleware.js'
import { CreateChannel } from '../controllers/ChannelController.js'

const channelRoutes = express.Router()

channelRoutes.post("/create-channel",verifyToken,CreateChannel)

export default channelRoutes;