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

export const ProductControllers = {
  createProduct,
};
