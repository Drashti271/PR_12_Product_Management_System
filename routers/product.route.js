import { Router } from "express";
import { addProductPage, addProduct, viewProduct, deleteProduct, editProduct } from "../controllers/product.controller.js";
import imageUpload from "../middlewares/imageUpload.js"
const productRouter = Router();

productRouter.get('/addProduct',addProductPage);
productRouter.post('/addProduct',imageUpload,addProduct);

productRouter.get('/viewProduct',viewProduct);

productRouter.get('/deleteProduct/:id',deleteProduct);

productRouter.post('/editProduct/:id',imageUpload,editProduct);

export default productRouter;