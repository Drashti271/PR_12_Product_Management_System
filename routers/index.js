import { Router } from "express";
import userRouter from "../routers/user.route.js"
import productRouter from "./product.route.js";
import inventoryRouter from "./inventory.route.js";
const router = Router();

router.get('/', (req, res) => {
    return res.redirect('/register');
});

router.use('/',userRouter);
router.use('/',productRouter);
router.use('/inventory',inventoryRouter);

export default router;