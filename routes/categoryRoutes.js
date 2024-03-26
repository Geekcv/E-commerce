import express from "express";
import { isadmin, reuiresignin } from "../middlewares/authmiddlewate.js";
import   {
  categoryControlller,
  createCategoryController ,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController
} from "../controller/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  reuiresignin,
  isadmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  reuiresignin,
  isadmin,
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);

// single category
router.get("/single-category/:slug", singleCategoryController);

// delete category
router.delete(
  "/delete-category/:id",
  reuiresignin,
  isadmin,
  deleteCategoryCOntroller
);

export default router;