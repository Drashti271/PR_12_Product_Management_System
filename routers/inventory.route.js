import { Router } from "express";
import {
  purchasePage,
  salePage,
  addPurchase,
  addSale
} from "../controllers/inventory.controller.js";

const inventoryRouter = Router();

/* GET pages */
inventoryRouter.get("/purchase", purchasePage);
inventoryRouter.get("/sale", salePage);

/* POST actions */
inventoryRouter.post("/purchase", addPurchase);
inventoryRouter.post("/sale", addSale);

export default inventoryRouter;
