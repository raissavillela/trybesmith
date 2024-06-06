import { Router } from 'express';
import productMiddleware from '../middlewares/product.middleware';
import productController from '../controller/product.controller';

const productRouter = Router();

productRouter.post(
  '/products', 
  productMiddleware.validateNewProductMiddleware,
  productController.allProducts,
);
  
productRouter.get('/products', productController.respondListProducts);

export default productRouter;
