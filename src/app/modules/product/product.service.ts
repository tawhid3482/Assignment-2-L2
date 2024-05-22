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

const getSingleProductDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const getUpdateSingleProductDB = async (_id: string, updateData) => {
  const result = await ProductModel.updateOne({ _id }, { $set: updateData });
  return result;
};

const deleteSingleProductDB = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};

const getProductsBySearchTerm = async (searchTerm: string) => {
  const allProducts = await ProductModel.find();
  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );
  return filteredProducts;
};

export const productServices = {
  createProductIntoDB,
  getAllProductsDB,
  getSingleProductDB,
  getUpdateSingleProductDB,
  deleteSingleProductDB,
  getProductsBySearchTerm,
};
