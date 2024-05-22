import { Schema, model } from 'mongoose';
import { Inventory, Product, Variant } from './product/product.interface';

const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// Create the Variant schema
const variantSchema = new Schema<Variant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const productSchema = new Schema<Product>({
  name: { type: String, required: [true, 'name is required'], trim: true },
  description: { type: String, trim: true },
  price: { type: Number, required: [true, 'price is required'], trim: true },
  category: { type: String, required: [true, 'category is required'] },
  tags: { type: [String], required: [true, 'tags is required'] },
  variants: { type: [variantSchema], required: [true, 'variants is required'] },
  inventory: {
    type: inventorySchema,
    required: [true, 'inventory is required'],
  },
});

export const ProductModel = model<Product>('Product', productSchema);
