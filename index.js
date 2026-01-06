import express from "express";
import dotenv from "./configs/dotenv.js";
import router from "./routers/index.js";
import database from "./configs/database.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const port = dotenv.PORT || 3001;
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

app.use("/",router);

app.listen(port, () => {
    console.log("Server started.");
    console.log(`http://localhost:${port}`);
});
