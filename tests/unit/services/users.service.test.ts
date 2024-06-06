import { expect } from 'chai';
import sinon from 'sinon';

import ProductModel from '../../../src/database/models/product.model';
import UserModel from '../../../src/database/models/user.model';

import ProductService from '../../../src/service/product.service';
import UserService from '../../../src/service/user.service';

import ProductMocks from '../../mocks/products.mock';
import UserMocks from '../../mocks/user.mock';

describe('UsersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa o funcionamento da função findAllUsers', async function () {
    const { mockUsersFromDB, mockUsersWithProducts } = UserMocks;
    const { mockProductsFromDB } = ProductMocks;

    sinon.stub(UserModel, 'findAll').resolves(mockUsersFromDB);
    sinon.stub(ProductModel, 'findAll').resolves(mockProductsFromDB);

    const { status, data } = await UserService.findAllUsers();

    expect(status).to.deep.equal('SUCCESS');
    expect(data).to.deep.equal(mockUsersWithProducts);
  });
});
