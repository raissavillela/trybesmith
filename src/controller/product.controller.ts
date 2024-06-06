import { Request, Response } from 'express';
import productService from '../service/product.service';
import mapStatusHTTP from '../utils/statusHTTP';

async function allProducts(req: Request, res: Response): Promise<Response> {
  const newProduct = req.body;
  const serviceResponse = await productService.addProduct(newProduct);

  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

async function respondListProducts(_req: Request, res: Response): Promise<Response> {
  const serviceResponse = await productService.findAllProducts();

  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  allProducts,
  respondListProducts,
};