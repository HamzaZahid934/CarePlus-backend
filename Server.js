import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import bodyParser from "body-parser";
import connectdb from "./config/Database.js";
import userRoute from "./Routes/User-Routes.js";
import productRoute from "./Routes/product-Routes.js";
import cookieParser from "cookie-parser";
import AuthRoutes from "./Routes/loginsystem-Route.js"
import cartRoutes from "./Routes/cart-Routes.js";  
import checkoutRoutes from "./Routes/checkout-Routes.js";  
import reviewRoutes from "./Routes/review-Routes.js";  
import faqRoutes from "./Routes/faq-Routes.js";
import passwordResetRoutes from "./Routes/passwordreset-Routes.js";
import categoryRoute from "./Routes/category-Routes.js";   
import path from "path";
import { fileURLToPath } from "url";
dotenv.config;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieParser())


//user route
app.use("/", userRoute);
//product route
app.use("/", productRoute)
//Login route
app.use("/",AuthRoutes)
//cart route
app.use("/cart", cartRoutes); 
//checkout route
app.use("/checkout", checkoutRoutes);
//review route
app.use("/reviews", reviewRoutes);
//faq route
app.use("/faqs", faqRoutes); 
//password reset route
app.use("/", passwordResetRoutes);
//category routes
app.use("/", categoryRoute);

//for server Image response
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
app.use('/upload', express.static(path.join(__dirname, 'upload')));

//port listening 
const PORT = process.env.PORT || 8000;
connectdb();
app.listen(PORT, () => {
  console.log(`Server is running`);
});
