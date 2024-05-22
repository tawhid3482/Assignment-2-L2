import { Schema, model } from 'mongoose';
import { Order } from './order/order.interface';

const ordersSchema = new Schema<Order>({
  email: { type: String, required: [true, 'email is required'] },
  productId: { type: String, required: [true, 'productId is required'] },
  price: { type: Number, required: [true, 'price is required'] },
  quantity: { type: String, required: [true, 'quantity is required'] },
});
export const OrderModel = model<Order>('Orders', ordersSchema);
