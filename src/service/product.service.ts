import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const addProduct = async (newProductData: ProductInputtableTypes):
Promise<ServiceResponse<Product>> => {
  const newProduct = await ProductModel.create(newProductData);

  return { status: 'CREATED', data: newProduct.dataValues };
};

const findAllProducts = async (): Promise<ServiceResponse<Product[]>> => {
  const productsFromDB = await ProductModel.findAll();
  const productArray = productsFromDB.map((product) => product.dataValues);

  return { status: 'SUCCESS', data: productArray };
};

export default {
  addProduct,
  findAllProducts,
};
