import express from 'express';
import productsRouter from './routes/product.route';
import userRouter from './routes/user.route';

const app = express();

app.use(express.json());
app.use('/', productsRouter);
app.use('/', userRouter);

export default app;
