import { Request, Response } from 'express';
import userService from '../service/user.service';

const list = async (_req: Request, res: Response): Promise<Response> => (
  res.status(200).json((await userService.list()).data)
);

export default {
  list,
};
