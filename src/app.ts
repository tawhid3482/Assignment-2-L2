import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/modules/product/product.route';
const app: Application = express();

// using parser

app.use(express.json());
app.use(cors());

// application route
app.use('/', ProductRoute);

const getController = (req: Request, res: Response) => {
  res.send('Server is running');
};

app.get('/', getController);

export default app;
