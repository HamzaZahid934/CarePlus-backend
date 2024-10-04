import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import bodyParser from "body-parser";
import connectdb from "./config/Database.js";
import cookieParser from "cookie-parser";  
import productsRoute from "../Test/Routes/products-routes.js";
import userRoute from "../Test/Routes/user-route";
import reviewRoute from "../Test/Routes/reviews-routes.js";
dotenv.config;

const app = express();


pp.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieParser())

app.use ("/",productsRoute)
app.use ("/",userRoute)
app.use("/reviews",reviewRoute)
//port listening 
const PORT = process.env.PORT || 5000;
connectdb();
app.listen(PORT, () => {
  console.log(`Server is running`);
});