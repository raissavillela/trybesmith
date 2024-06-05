import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

export const createProducts = async (product: ProductInputtableTypes): Promise<Product> => {
  const newProduct = await ProductModel.create(product);

  return newProduct.dataValues;
};

export default {
  createProducts,
};
