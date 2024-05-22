import { OrderModel } from '../order.model';
import { ProductModel } from '../product.model';
import { Order } from './order.interface';

const createOrderIntoDB = async (order: Order) => {
  // Check the inventory of the product
  const product = await ProductModel.findById(order.productId);
  if (!product) {
    throw new Error('Product not found');
  }

  if (product.inventory.quantity < order.quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  // Create the order
  const result = await OrderModel.create(order);

  product.inventory.quantity -= order.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();

  return result;
};

const getAllOrdersDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const getOrdersByEmailDB = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  getAllOrdersDB,
  getOrdersByEmailDB,
};
