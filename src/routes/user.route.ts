import express from 'express';
import { userController } from '../controllers/user.controller';
const router = express.Router();

router.post('/create',userController.userCreate)

router.get('/getUser',userController.getUser)

export default router
