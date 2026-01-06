import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "productModel", 
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  sellingPrice: Number,
  customer: String
});

export default mongoose.model("Sale", saleSchema);
