import { expect } from 'chai';
import sinon from 'sinon';

import UserModel from '../../../src/database/models/user.model';
import LoginService from '../../../src/service/login.service';
import userMocks from '../../mocks/user.mock';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

});

it('Testa se a função funciona corretamente', async function () {
  const { mockUserFromDB, mockUserCredentials } = userMocks;

  sinon.stub(UserModel, 'findOne').resolves(mockUserFromDB);

  const { status, data } = await LoginService.loginVerify(mockUserCredentials);

  expect(status).to.deep.equal('SUCCESS');
  expect(data).to.have.property('token');
});
