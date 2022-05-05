import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel;
