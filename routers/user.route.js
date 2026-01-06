import { Router } from "express";
import { dashboard, registerPage, register, login, loginPage, logout } from "../controllers/user.controller.js";
import userAuth from "../middlewares/userAuth.js";
const userRouter = Router();

// Register
userRouter.get('/register',registerPage);
userRouter.post('/register',register);

// Login
userRouter.get('/login',loginPage);
userRouter.post('/login',login);

// DashBoard
userRouter.get('/dashboard',userAuth,dashboard);

// Logout
userRouter.get('/logout',logout);

export default userRouter;
