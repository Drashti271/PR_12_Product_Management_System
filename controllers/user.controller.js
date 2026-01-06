import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const dashboard = (req, res) => {
    return res.render("index.ejs", {
        user: req.user
    });
};

export const registerPage = (req, res) => {
    return res.render("./pages/register.ejs");
};

export const register = async (req, res) => {
    try {
        const { password, confirmPassword, email } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match"
            });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        req.body.password = await bcrypt.hash(password, 10);
        await UserModel.create(req.body);

        console.log("User Created Successfully");
        return res.redirect("/login");

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export const loginPage = (req, res) => {
    return res.render("./pages/login.ejs");
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET
        );

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        console.log("Login Success");
        return res.redirect("/dashboard"); 

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export const logout = (req, res) => {
    res.clearCookie("token");
    return res.redirect("/login");
};
