import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

router.post('/signUp', UserController.signUp);
router.post('/signIn', UserController.signIn);

export default router;