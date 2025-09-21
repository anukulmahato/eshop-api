import dotenv from "dotenv";
import express from "express";
import brandRouter from "./router/brand.js";
import categoryRouter from "./router/category.js";
import tagRouter from "./router/tag.js";


//env vars
dotenv.config();

const PORT = process.env.PORT || 6060


//init express
const app = express();

//support
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routing
app.use("/api/v1/brand", brandRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/tag", tagRouter);

//listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})