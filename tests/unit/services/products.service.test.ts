import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import ProductService from '../../../src/service/product.service'
import productMocks from '../../mocks/products.mock';

describe('Valida product na camada Service', function () {
  beforeEach(function () { sinon.restore(); });

    it('Testa o funcionamento da função addProduct', async function () {
    const { mockNewProduct, mockProductFromDB } = productMocks;

    sinon.stub(ProductModel, 'create').resolves(mockProductFromDB);

    const { status, data } = await ProductService.addProduct(mockNewProduct);

    expect(status).to.deep.equal('CREATED');
    expect(data).to.deep.equal(mockProductFromDB.dataValues);
  });

  it('Testa o funcionamento da função findAllProducts', async function () {
    const { mockExistingProducts, mockProductsFromDB } = productMocks;
    
    sinon.stub(ProductModel, 'findAll').resolves(mockProductsFromDB);

    const { status, data } = await ProductService.findAllProducts();

    expect(status).to.deep.equal('SUCCESS');
    expect(data).to.deep.equal(mockExistingProducts);
  });
});
