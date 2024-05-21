import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// call controller function

router.post('/api/products', ProductControllers.createProduct);

export const ProductRoute = router;
