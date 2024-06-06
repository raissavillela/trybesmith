import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';

import userService from '../../../src/service/user.service';
import userController from '../../../src/controller/user.controller';

import userMocks from '../../mocks/user.mock';

import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { User, UserWithProducts } from '../../../src/types/User';

chai.use(sinonChai);

describe('UsersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testa o funcionamento da função', async function () {
    const { mockUsersWithProducts } = userMocks;

    const mockServiceResponse: ServiceResponse<UserWithProducts[]> = {
      status: 'SUCCESS',
      data: mockUsersWithProducts,
    }

    sinon.stub(userService, 'findAllUsers').resolves(mockServiceResponse);

    await userController.allUsers(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockServiceResponse.data);
  });
});
