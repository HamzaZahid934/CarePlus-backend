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
dotenv.config;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieParser())
app.use("/", userRoute);
app.use("/", productRoute)
app.use("/",AuthRoutes)

const PORT = process.env.PORT || 5000;
connectdb();
app.listen(PORT, () => {
  console.log(`Server is running`);
});
