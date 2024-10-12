import express from 'express'
import {verifyToken} from '../middlewares/AuthMiddleware.js'
import { searchContacts } from '../controllers/ContactsController.js'

const contactsRoutes = express.Router()

contactsRoutes.post('/search',verifyToken,searchContacts)

export default contactsRoutes;