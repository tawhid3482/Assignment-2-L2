import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// call controller function

router.post('/products', ProductControllers.createProduct);

router.get('/products/:productId', ProductControllers.getSingleProducts);

router.get('/products', ProductControllers.getAllProducts);

router.put('/products/:productId', ProductControllers.updateSingleProduct);
router.delete('/products/:productId', ProductControllers.deleteSingleProduct);

export const ProductRoute = router;
