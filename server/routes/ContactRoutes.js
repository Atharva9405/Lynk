import express from 'express'
import {verifyToken} from '../middlewares/AuthMiddleware.js'
import { getContactsForDMList, searchContacts } from '../controllers/ContactsController.js'

const contactsRoutes = express.Router()

contactsRoutes.post('/search',verifyToken,searchContacts)
contactsRoutes.get('/get-contacts-for-dm',verifyToken,getContactsForDMList)

export default contactsRoutes;