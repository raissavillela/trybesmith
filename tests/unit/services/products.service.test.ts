import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../src/app';
import ProductService from '../../../src/services/product.service';
import { productInput } from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('Testa se o post esta funcionando', function () {
  beforeEach(function () { sinon.restore(); });
  it('cria um produto com sucesso', async function () {

    const requestProduct = await ProductService.createProducts(productInput);

    sinon.stub(ProductService, 'createProducts').resolves(requestProduct);

      const response = await chai.request(app)
          .post('/products')
          .send(productInput);

      expect(response.status).to.equal(201);
  });
});
