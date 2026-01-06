import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  image: {
    type : String,
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description : {
    type : String,
    required : true
  },
  category: {
    type: String,
    required: true,
    enum: ['Men Fashion','Women Fashion', 'Beauty', 'Electronic', 'Stationary']
  },
  stock: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

const ProductModel =
  mongoose.models.productModel ||
  mongoose.model('productModel', productSchema);

export default ProductModel;
