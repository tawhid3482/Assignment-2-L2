import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

// call controller function

router.post('/orders', OrderControllers.createOrder);
router.get('/orders', OrderControllers.getOrdersByEmail);
export const OrderRoute = router;
