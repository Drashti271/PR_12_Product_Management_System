# PR_12_Product_Management_System

# Product Management System (PR_12_PRODUCT_MANAGEMENT)

A Node.js + Express based Product Management System using **MVC
architecture**, **MongoDB**, **EJS**, and **Passport authentication**.

Default Login/Signup Process :
Email : drashti@gmail.com
Password : 1234

## 📁 Project Structure

    PR_12_PRODUCT_MANAGEMENT/
    │
    ├── configs/
    │   ├── database.js        # MongoDB connection
    │   └── dotenv.js          # Environment configuration
    │
    ├── controllers/
    │   ├── inventory.controller.js
    │   ├── product.controller.js
    │   └── user.controller.js
    │
    ├── middlewares/
    │   ├── imageUpload.js     # Image upload middleware
    │   └── isAuth.js          # Authentication middleware
    │
    ├── models/
    │   ├── product.model.js
    │   ├── purchase.model.js
    │   ├── sale.model.js
    │   └── user.model.js
    │
    ├── public/                # Static files (CSS, JS, images)
    │
    ├── routers/
    │   ├── index.js
    │   ├── inventory.route.js
    │   ├── product.route.js
    │   └── user.route.js
    │
    ├── uploads/               # Uploaded images
    │
    ├── views/
    │   ├── pages/
    │   │   ├── addProduct.ejs
    │   │   ├── login.ejs
    │   │   ├── register.ejs
    │   │   ├── purchase.ejs
    │   │   ├── sale.ejs
    │   │   ├── viewProduct.ejs
    │   │   ├── viewPurchase.ejs
    │   │   └── viewSale.ejs
    │   │
    │   ├── partials/
    │   │   ├── header.ejs
    │   │   └── footer.ejs
    │   │
    │   └── index.ejs
    │
    ├── .env
    ├── .gitignore
    ├── index.js               # App entry point
    ├── package.json
    └── README.md

## 🚀 Features

-   User Authentication (Passport.js)
-   Product CRUD Operations
-   Purchase & Sale Management
-   Inventory Tracking
-   Image Upload Support
-   MVC Folder Structure
-   EJS Templating

## 🛠️ Technologies Used

-   Node.js
-   Express.js
-   MongoDB & Mongoose
-   EJS
-   Passport.js
-   Multer
-   Bootstrap

## ⚙️ Installation

``` bash
git clone <repository-url>
cd PR_12_PRODUCT_MANAGEMENT
npm install
```

## ▶️ Run Project

``` bash
npm start
```

Server will run on:

    http://localhost:3001

## 🔐 Environment Variables (.env)

    PORT=3001
    DB_URL=your_mongodb_url
    SESSION_SECRET=your_secret

## 📌 Notes

-   Make sure MongoDB is running
-   Create `uploads/` folder if not present
-   Use valid credentials for login

## 👩‍💻 Author

**Drashti Bilimoria**

------------------------------------------------------------------------

