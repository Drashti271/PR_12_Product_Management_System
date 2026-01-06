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
  try {
    const { product, quantity, supplier, purchasePrice } = req.body;
    const qty = Number(quantity);

    await Purchase.create({
      product,
      quantity: qty,
      supplier,
      purchasePrice
    });

    await ProductModel.findByIdAndUpdate(
      product,
      { $inc: { stock: qty } }
    );

    res.redirect("/inventory/purchase");
  } catch (error) {
    console.log(error);
    res.send("Purchase add nahi hua");
  }
};

export const addSale = async (req, res) => {
  try {
    const { product, quantity, sellingPrice, customer } = req.body;
    const qty = Number(quantity);

    const productData = await ProductModel.findById(product);

    if (!productData) {
      return res.send("Product nahi mila");
    }

    if (productData.stock < qty) {
      return res.send("Stock available nahi hai");
    }

    await Sale.create({
      product,
      quantity: qty,
      sellingPrice,
      customer
    });

    await ProductModel.findByIdAndUpdate(
      product,
      { $inc: { stock: -qty } }
    );

    res.redirect("/inventory/sale");
  } catch (error) {
    console.log(error);
    res.send("Sale add nahi hui");
  }
};

/* ================= VIEW SALE ================= */
export const viewSale = async (req, res) => {
  try {
    const sales = await Sale.find().populate("product");

    return res.render("./pages/viewSale.ejs", {
      sales
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error while fetching sales");
  }
};

/* ================= VIEW PURCHASE ================= */
export const viewPurchase = async (req, res) => {
  try {
    const purchases = await Purchase.find().populate("product");

    return res.render("./pages/viewPurchase.ejs", {
      purchases
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error while fetching purchases");
  }
};
