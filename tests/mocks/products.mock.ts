import ProductModel from "../../src/database/models/product.model";

const mockNewProduct = { name: 'Mori', price: '8000', userId: 1 }

const mockExistingProduct = { id: 777, name: 'Mori', price: '8000', userId: 1 }
const mockProductFromDB = ProductModel.build(mockExistingProduct);

const mockExistingProducts = [
  { 
    id: 1, 
    name: 'Fishing Rod', 
    price: '9999 jennies', 
    userId: 1 },
  {
    id: 2,
    name: 'Hunter License',
    price: '100.000.000 jennies',
    userId: 1
  },
];

const mockProductsFromDB = mockExistingProducts.map((product) => ProductModel.build(product));

export default {
  mockExistingProduct,
  mockNewProduct,
  mockProductFromDB,
  mockExistingProducts,
  mockProductsFromDB,
}