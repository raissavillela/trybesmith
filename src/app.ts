import express from 'express';
import productRouter from './routes/product.route';
import userRouter from './routes/user.route';
import loginRouter from './routes/login.route';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(userRouter);
app.use(loginRouter);

export default app;
