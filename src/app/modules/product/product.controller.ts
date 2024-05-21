import { Request, Response } from 'express';
import { productServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productsData } = req.body;

    const result = await productServices.createProductIntoDB(productsData);

    res.status(400).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductsDB();
    res.status(200).json({
      success: true,
      message: 'Products get successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product get successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProducts,
};
