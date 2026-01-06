import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
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
  supplier: String,
  purchasePrice: Number
});

export default mongoose.model("Purchase", purchaseSchema);
