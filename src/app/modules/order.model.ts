import { Schema, model } from 'mongoose';
import { Order } from './order/order.interface';

const ordersSchema = new Schema<Order>({
  email: { type: String, required: [true, 'email is required'], trim: true },
  productId: {
    type: String,
    required: [true, 'productId is required'],
    trim: true,
  },
  price: { type: Number, required: [true, 'price is required'], trim: true },
  quantity: { type: Number, required: [true, 'quantity is required'] },
});

export const OrderModel = model<Order>('Orders', ordersSchema);
