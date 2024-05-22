import { Request, Response } from 'express';
import { orderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    // Extracting order data from the request body
    const orderData = req.body;
    // Validate the request body
    if (!orderData || !orderData.productId || !orderData.quantity) {
      return res.status(400).json({
        success: false,
        message:
          'Invalid order data. Ensure productId and quantity are provided.',
      });
    }
    // Create the order and update the inventory
    const result = await orderServices.createOrderIntoDB(orderData);

    res.status(201).json({
      success: true,
      message: 'Order is created successfully',
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'Insufficient quantity available in inventory') {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      } else if (error.message === 'Product not found') {
        res.status(404).json({
          success: false,
          message: error.message,
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Failed to create order',
          error: error.message,
        });
      }
    } else {
      res.status(500).json({
        success: false,
        message: 'An unknown error occurred',
      });
    }
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getAllOrdersDB();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    if (!email) {
      return getAllOrders(req, res);
    }

    const result = await orderServices.getOrdersByEmailDB(email);
    res.status(200).json({
      success: true,
      message: `Orders fetched successfully for email: ${email}`,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
