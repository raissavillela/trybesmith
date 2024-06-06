import { Router } from 'express';

import loginMiddleware from '../middlewares/login.middleware';
import loginController from '../controller/login.controller';

const loginRouter = Router();

loginRouter.post(
  '/login', 
  loginMiddleware.validateLoginCredentialsMiddleware,
  loginController.responseLoginVerify,
);

export default loginRouter;
