import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Login } from '../types/Login';
import { Token } from '../types/Token';

const loginVerify = async (loginCredentials: Login): Promise<ServiceResponse<Token>> => {
  const { username, password } = loginCredentials;
  const loginUser = await UserModel.findOne({ where: { username } });

  if (!loginUser || !bcrypt.compareSync(password, loginUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const jwtToken = generateToken({ 
    id: loginUser.dataValues.id, 
    username: loginUser.dataValues.username,
  });

  return { status: 'SUCCESS', data: { token: jwtToken } };
};

export default {
  loginVerify,
};
