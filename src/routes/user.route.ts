import { Router } from 'express';
import userController from '../controller/user.controller';

const userRouter = Router();
userRouter.get('/users', userController.list);

export default userRouter;
