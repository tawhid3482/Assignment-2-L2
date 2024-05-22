import { Request, Response } from 'express';
import { productServices } from './product.service';
import productValidationSchema from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productsData } = req.body;

    // using zod validation
    const zodParsedData = productValidationSchema.parse(productsData);

    const result = await productServices.createProductIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: 'Failed to create product',
      error: error.message,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    let result;
    if (searchTerm) {
      result = await productServices.getProductsBySearchTerm(searchTerm);
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      result = await productServices.getAllProductsDB();
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully',
        data: result,
      });
    }
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

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    const result = await productServices.getUpdateSingleProductDB(
      productId,
      updateData,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await productServices.deleteSingleProductDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProducts,
  updateSingleProduct,
  deleteSingleProduct,
};
