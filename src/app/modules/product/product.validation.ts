import { z } from 'zod';

// Define the Zod schema for Inventory
const inventoryValidationSchema = z.object({
  quantity: z.number().min(0).int(),
  inStock: z.boolean(),
});

// Define the Zod schema for Variant
const variantValidationSchema = z.object({
  type: z.string().nonempty(),
  value: z.string().nonempty(),
});

// Define the Zod schema for Product
const productValidationSchema = z.object({
  name: z.string().nonempty().trim(),
  description: z.string().transform((value) => value?.trim()),
  price: z.number().min(1),
  category: z.string().nonempty(),
  tags: z.array(z.string().nonempty()),
  variants: z.array(variantValidationSchema).nonempty(),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
