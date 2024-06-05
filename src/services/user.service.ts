import UserModel, { UserSequelizeModel } from '../database/models/user.model';
import { UserProduct } from '../types/User';

const list = async (): Promise<{ status: number, data: UserProduct[] }> => {
  const usuarios: UserSequelizeModel[] = await UserModel.findAll({
    include: 'productIds',
  });

  const listU: UserProduct[] = usuarios.map((user: UserSequelizeModel) => {
    const username = user.getDataValue('username');
    const productIds = user.getDataValue('productIds');

    if (!username || !Array.isArray(productIds)) {
      return { username: '', productIds: [] };
    }

    return {
      username: username as string,
      productIds: productIds.map((product: { id: number }) => product.id),
    };
  });

  return { status: 200, data: listU };
};

export default {
  list,
};