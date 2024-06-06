import { Request, Response, NextFunction } from 'express';
import UserModel from '../database/models/user.model';

const validateName = (name: string): { status:number, message:string } => {
  if (!name || name === '') {
    return { status: 400, message: '"name" is required' };
  }
  if (typeof name !== 'string') {
    return { status: 422, message: '"name" must be a string' };
  }
  if (name.length < 3) {
    return { status: 422, message: '"name" length must be at least 3 characters long' };
  }
  return { status: 200, message: '"name" field is correct.' };
};

const validatePrice = (price: string): { status:number, message:string } => {
  if (!price || price === '') {
    return { status: 400, message: '"price" is required' };
  }
  if (typeof price !== 'string') {
    return { status: 422, message: '"price" must be a string' };
  }
  if (price.length < 3) {
    return { 
      status: 422,
      message: '"price" length must be at least 3 characters long',
    };
  }
  return { status: 200, message: '"price" field is correct.' };
};

const validateUserId = async (userId: string)
: Promise<{ status:number, message:string }> => {
  if (!userId || userId === '') {
    return { status: 400, message: '"userId" is required' };
  }

  if (typeof userId !== 'number') {
    return { status: 422, message: '"userId" must be a number' };
  }

  const foundUser = await UserModel.findOne({ where: { id: userId } });

  if (!foundUser) {
    return { 
      status: 422,
      message: '"userId" not found',
    };
  }

  return { status: 200, message: '"userId" field is correct.' };
};

const validateNewProductMiddleware = async (req: Request, res: Response, next: NextFunction)
: Promise<Response | void> => {
  const { name, userId, price } = req.body;

  const nameValidation = validateName(name);
  if (nameValidation.status !== 200) {
    return res.status(nameValidation.status).json({ message: nameValidation.message });
  }

  const userIdValidation = await validateUserId(userId);
  if (userIdValidation.status !== 200) {
    return res.status(userIdValidation.status).json({ message: userIdValidation.message });
  }

  const priceValidation = validatePrice(price);
  if (priceValidation.status !== 200) {
    return res.status(priceValidation.status).json({ message: priceValidation.message });
  }

  return next();
};

export default {
  validateNewProductMiddleware,
};