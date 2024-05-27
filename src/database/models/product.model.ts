import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Product } from '../../types/Product';
import User from './user.model';

export type ProductInputtableTypes = Optional<Product, 'id'>;
type ProductSequelizeModelCreator = ModelDefined<Product, ProductInputtableTypes>;
export type ProductSequelizeModel = Model<Product, ProductInputtableTypes>;

const ProductModel: ProductSequelizeModelCreator = db.define('Product', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'products',
  timestamps: false,
  underscored: true,
});

User.hasMany(ProductModel, { foreignKey: 'userId', as: 'productIds' });
ProductModel.belongsTo(User, { foreignKey: 'userId' });

export default ProductModel;
