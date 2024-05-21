import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// call controller function

router.post('/', ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProducts);
router.get('/:productId', ProductControllers.getSingleProducts);

router.put('/:productId', ProductControllers.updateSingleProduct);
router.delete('/:productId', ProductControllers.);

export const ProductRoute = router;
