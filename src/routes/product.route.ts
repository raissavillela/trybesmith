import { Router } from 'express';
import productController from '../controllers/product.controller';

const productsRouter = Router();
productsRouter.post('/products', productController.createProduct);
productsRouter.get('/products', productController.allProducts);

export default productsRouter;
