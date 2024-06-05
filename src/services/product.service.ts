import ProductModel, { ProductInputtableTypes, ProductSequelizeModel } 
  from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

export const createProducts = async (product: ProductInputtableTypes): Promise<Product> => {
  const newProduct = await ProductModel.create(product);

  return newProduct.dataValues;
};

export const findAllProducts = async (): Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const allProducts = await ProductModel.findAll();

  return { status: 200, data: allProducts };
};

export default {
  createProducts,
  findAllProducts,
};
