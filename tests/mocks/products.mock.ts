import { Optional } from 'sequelize';
import { Product } from '../../src/types/Product';

export const productInput: Optional<Product, 'id'> = {
    name: 'Martelo de Thor',
    price: '30 peças de ouro',
    userId: 1
};
