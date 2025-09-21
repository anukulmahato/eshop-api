import express from "express";
import { createCategory, deleteSingleCategory, getAllCategory, getSingleCategory, updateSingleCategory } from "../controllers/CategoryController.js";
import { categoryMulter } from "../middlewares/MulterMiddleware.js";

//init router
const router = express.Router();

//endpoints
router.get("/", getAllCategory);
router.get("/:id", getSingleCategory);
router.delete("/:id", deleteSingleCategory);
router.patch("/:id", updateSingleCategory);
router.post("/", categoryMulter, createCategory);


//export default
export default router;