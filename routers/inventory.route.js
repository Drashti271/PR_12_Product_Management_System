import { Router } from "express";
import { purchasePage, salePage, addPurchase, addSale, viewSale, viewPurchase } from "../controllers/inventory.controller.js";

const inventoryRouter = Router();

/* GET pages */
inventoryRouter.get("/purchase", purchasePage);
inventoryRouter.get("/sale", salePage);

/* POST actions */
inventoryRouter.post("/purchase", addPurchase);
inventoryRouter.post("/sale", addSale);

inventoryRouter.get("/viewSale",viewSale);
inventoryRouter.get("/viewPurchase",viewPurchase);

export default inventoryRouter;
