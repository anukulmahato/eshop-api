import express from "express";
import { createTag, deleteSingleTag, getAllTag, getSingleTag, updateSingleTag } from "../controllers/TagController";


//init router
const router = express.Router();

//endpoints

router.get("/", getAllTag);
router.get("/:id", getSingleTag);
router.delete("/:id", deleteSingleTag);
router.patch("/:id", updateSingleTag);
router.post("/", createTag);

//export default
export default router;