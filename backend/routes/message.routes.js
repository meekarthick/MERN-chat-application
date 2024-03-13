import express from "express";
import {sendMessage} from '../controllers/message.controllers.js'
import { getMessages } from "../controllers/message.controllers.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

//  <---- Getting messages ----->
    router.get("/:id",protectRoute,getMessages)

//  <---- Sending messages ----->
    router.post("/send/:id",protectRoute,sendMessage)

export default router;