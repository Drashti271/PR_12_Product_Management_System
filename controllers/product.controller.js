import ProductModel from "../models/Product.model.js";
import fs from "fs";
import path from "path";

export const addProductPage = (req, res) => {
    return res.render("./pages/addProduct.ejs");
};

export const addProduct = async (req, res) => {
    try {
        if (req.file) {
            req.body.image = req.file.filename;
        }

        const product = await ProductModel.create(req.body);
        console.log("Product Added:", product);

        return res.redirect(req.get("Referrer") || "/");
    } catch (error) {
        console.log("Add Product Error:", error.message);
    }
};

export const viewProduct = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        return res.render("./pages/viewProduct.ejs", { products });
    } catch (error) {
        console.log("View Product Error:", error.message);
        return res.render("./pages/viewProduct.ejs", { products: [] });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await ProductModel.findById(id);

        if (product?.image) {
            const imagePath = path.join(
                process.cwd(),
                "public/uploads",
                product.image
            );

            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await ProductModel.findByIdAndDelete(id);

        console.log("Product Deleted");
        return res.redirect(req.get("Referrer") || "/");
    } catch (error) {
        console.log("Delete Product Error:", error.message);
    }
};

export const editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const oldProduct = await ProductModel.findById(id);

        if (req.file) {
            updatedData.image = req.file.filename;

            if (oldProduct?.image) {
                const oldImagePath = path.join(
                    process.cwd(),
                    "public/uploads",
                    oldProduct.image
                );

                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
        }

        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            updatedData,
            { new: true }
        );

        console.log("Product Updated:", updatedProduct);
        return res.redirect("/viewProduct");
    } catch (error) {
        console.log("Edit Product Error:", error.message);
        return res.status(500).send("Error updating product");
    }
};
