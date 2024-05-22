import { z } from 'zod';

// Define the Zod schema for Order
const orderValidationSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .nonempty({ message: 'Email is required' })
    .trim(),
  productId: z.string().nonempty({ message: 'Product ID is required' }).trim(),
  price: z.number().min(0, { message: 'Price must be a non-negative number' }),
  quantity: z.number().min(1, { message: 'Quantity must be at least 1' }), // Updated to number
});

export default orderValidationSchema;
