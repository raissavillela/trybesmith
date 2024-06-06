import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { Request, Response } from 'express';
import { Product } from '../../../src/types/Product';
import { ServiceResponse } from '../../../src/types/ServiceResponse';

import productService from '../../../src/service/product.service';
import productController from '../../../src/controller/product.controller';

import productMocks from '../../mocks/products.mock';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testa se produto é adicionado', async function () {
    const { mockNewProduct, mockProductFromDB } = productMocks;

    req.body = mockNewProduct;

    const mockServiceResponse: ServiceResponse<Product> = {
      status: 'CREATED',
      data: mockProductFromDB.dataValues,
    }

    sinon.stub(productService, 'addProduct').resolves(mockServiceResponse);

    await productController.allProducts(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(mockServiceResponse.data);
  });

  it('Verifica funcionamento da função listProducts - Caso SUCCESS', async function () {
    const { mockExistingProducts } = productMocks;

    const mockServiceResponse: ServiceResponse<Product[]> = {
      status: 'SUCCESS',
      data: mockExistingProducts,
    }

    sinon.stub(productService, 'findAllProducts').resolves(mockServiceResponse);

    await productController.respondListProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockServiceResponse.data);
  });
});
