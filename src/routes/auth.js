import { Router } from "express";
import * as authCtrl from '../controllers/auth';

const router = Router();

router.post('/singin', authCtrl.singIn);
router.post('/singup', authCtrl.singUp);

export default router;