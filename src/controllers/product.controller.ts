import { Request, Response } from 'express';
import { createProducts, findAllProducts } from '../services/product.service';

async function createProduct(req: Request, res: Response): Promise<void> {
  const { name, price, userId } = req.body;
  const products = await createProducts({ name, price, userId });
  res.status(201).json(products);
}

async function allProducts(_req: Request, res: Response): Promise<void> {
  const products = await findAllProducts();
  res.status(200).json(products.data);
}

export default {
  createProduct,
  allProducts,
};