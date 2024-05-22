import { Schema, model } from 'mongoose';
import { Order } from './order/order.interface';

const ordersSchema = new Schema<Order>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: String, required: true },
});
export const OrderModel = model<Order>('Orders', ordersSchema);
