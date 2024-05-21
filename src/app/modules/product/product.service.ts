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

const getSingleProductDB = async (_id) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductsDB,
  getSingleProductDB,
};
