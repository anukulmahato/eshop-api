import express from "express";
import { createBrand, deleteSingleBrand, getAllBrand, getSingleBrand, updateSingleBrand } from "../controllers/BrandController.js";
import { brandMulter } from "../middlewares/MulterMiddleware.js";

//init router
const router = express.Router();

//endpoints
router.get("/", getAllBrand);
router.get("/:id", getSingleBrand);
router.post("/",brandMulter, createBrand);
router.delete("/:id", deleteSingleBrand);
router.patch("/:id", updateSingleBrand);


//export default
export default router;