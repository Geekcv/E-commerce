import  Express from "express";
import {registercontroller, logincontroller,testcontroller, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controller/authcontroller.js'
import { isadmin, reuiresignin } from "../middlewares/authmiddlewate.js";
// router object
const router = Express.Router()

//routing
//register || method post
router.post('/register',registercontroller)

//LOGIN || POST
router.post('/login',logincontroller)

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);


//test routes
router.get('/test',reuiresignin, isadmin,testcontroller)


//protected route auth user
router.get("/user-auth", reuiresignin, (req, res) => {
    res.status(200).send({ ok: true });
  });
  
//protected route for admin 

  router.get("/admin-auth", reuiresignin, isadmin, (req, res) => {
    res.status(200).send({ ok: true });
  });


//update profile
router.put("/profile", reuiresignin, updateProfileController);

//orders
router.get("/orders", reuiresignin, getOrdersController);


//all orders
router.get("/all-orders", reuiresignin, isadmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  reuiresignin,
  isadmin,
  orderStatusController
);


export default router