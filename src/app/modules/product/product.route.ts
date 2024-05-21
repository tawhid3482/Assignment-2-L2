import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// call controller function

router.post('/api/products', ProductControllers.createProduct);
router.get('/api/products', ProductControllers.getAllProducts);
router.get('/api/products/:productId', ProductControllers.getSingleProducts);

export const ProductRoute = router;
