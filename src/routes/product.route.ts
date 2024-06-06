import { Router } from 'express';
import productController from '../controller/product.controller';

const productRouter = Router();
productRouter.post('/products', productController.createProduct);
productRouter.get('/products', productController.allProducts);

export default productRouter;
