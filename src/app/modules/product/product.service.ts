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

const getUpdateSingleProductDB = async (_id, updateData) => {
  const result = await ProductModel.updateOne({ _id }, { $set: updateData });
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductsDB,
  getSingleProductDB,
  getUpdateSingleProductDB,
};
