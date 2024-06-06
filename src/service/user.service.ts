import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { UserWithProducts } from '../types/User';

const findAllUsers = async (): Promise<ServiceResponse<UserWithProducts[]>> => {
  const usersFromDB = await UserModel.findAll();
  const usersArray = usersFromDB.map((user) => user.dataValues);

  const usersWithTheirProducts = await Promise.all(usersArray.map(async (user) => {
    const productsFromDB = await ProductModel.findAll({ where: { userId: user.id } });
    const productsArray = productsFromDB.map((product) => product.dataValues.id);

    const userWithProducts = {
      username: user.username,
      productIds: productsArray,
    };
    return userWithProducts;
  }));
  return { status: 'SUCCESS', data: usersWithTheirProducts };
};

export default {
  findAllUsers,
};