import { ProductModel } from '../product.model';
import { Product } from './product.interface';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsDB = async () => {
  const result = await ProductModel.find();
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductsDB,
};