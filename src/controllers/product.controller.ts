import { Request, Response } from 'express';
import { createProducts } from '../services/product.service';

async function createProduct(req: Request, res: Response): Promise<void> {
  const { name, price, userId } = req.body;
  const products = await createProducts({ name, price, userId });
  res.status(201).json(products);
}

export default {
  createProduct,
};