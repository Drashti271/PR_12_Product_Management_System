import Purchase from "../models/purchase.model.js";
import Sale from "../models/sale.model.js";
import ProductModel from "../models/product.model.js";

export const purchasePage = async (req, res) => {
  const products = await ProductModel.find();
  res.render("./pages/purchase.ejs", { products });
};

export const salePage = async (req, res) => {
  const products = await ProductModel.find();
  res.render("./pages/sale.ejs", { products });
};

export const addPurchase = async (req, res) => {
  const { product, quantity } = req.body;

  await Purchase.create(req.body);

  await ProductModel.findByIdAndUpdate(product, {
    $inc: { stock: quantity }
  });

  res.redirect("/purchase");
};

export const addSale = async (req, res) => {
  const { product, quantity } = req.body;

  const productData = await ProductModel.findById(product);

  if (productData.stock < quantity) {
    return res.send("❌ Stock available nahi hai");
  }

  await Sale.create(req.body);

  await ProductModel.findByIdAndUpdate(product, {
    $inc: { stock: -quantity }
  });

  res.redirect("/sale");
};
