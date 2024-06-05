import { expect } from 'chai';
import sinon from 'sinon';
import userService from '../../../src/services/user.service';

describe('UsersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa se a lista de usuários é corretamente chamada, status 200', async () => {
    const response = await userService.list()
    expect(response.status).to.equal(200);
  })

});
