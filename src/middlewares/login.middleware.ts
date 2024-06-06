import { Request, Response, NextFunction } from 'express';

const validateLoginCredentialsMiddleware = (req:Request, res:Response, next:NextFunction)
: Response | void => {
  if (!req.body.username || req.body.username === '') {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  if (!req.body.password || req.body.password === '') {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  return next();
};

export default {
  validateLoginCredentialsMiddleware,
};