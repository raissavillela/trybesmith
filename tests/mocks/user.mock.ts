import UserModel from "../../src/database/models/user.model";
import bcrypt from 'bcryptjs';

const mockExistingUsers = [
  {
    id: 1,
    username: 'Gon',
    vocation: 'Fortalecimento',
    level: 3,
    password: 'killua',
  },
];

const mockUsersFromDB = mockExistingUsers.map((product) => UserModel.build(product));

const mockUsersWithProducts = [
  {
    username: 'Gon',
    productIds: [1, 2],
  },
];

const mockUserFromDB = UserModel.build(mockExistingUsers[0]);
mockUserFromDB.dataValues.password = bcrypt.hashSync(mockExistingUsers[0].password, 10);

const mockUserCredentials = {
  username: 'Gon',
  password: 'killua',
};


export default {
  mockExistingUsers,
  mockUsersFromDB,
  mockUsersWithProducts,
  mockUserFromDB,
  mockUserCredentials,
}
