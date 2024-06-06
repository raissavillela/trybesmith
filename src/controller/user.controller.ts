import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/statusHTTP';
import userService from '../service/user.service';

const allUsers = async (_req: Request, res: Response): Promise<Response> => {
  const { status, data } = await userService.findAllUsers();

  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  allUsers,
};
