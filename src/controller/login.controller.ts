import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/statusHTTP';

import loginService from '../service/login.service';

const responseLoginVerify = async (req: Request, res: Response): Promise<Response> => {
  const loginCredentials = req.body;

  const { status, data } = await loginService.loginVerify(loginCredentials);

  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  responseLoginVerify,
};
