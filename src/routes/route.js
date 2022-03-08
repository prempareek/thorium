const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const productcontroller= require("../controllers/productController")
const orderController=require("../controllers/orderController")
const HeaderMiddleware = require('../middleware/headerMiddleware')

router.get("/test-me", function (req, res) {
    res.send("My first  api!")
})

router.post("/createUser",HeaderMiddleware.headerValidation, UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

router.post("/createProduct", productcontroller.createProduct )

 //router.get("/getAllproduct", productcontroller.getAllProducts)

router.post("/createOrder", HeaderMiddleware.headerValidation, orderController.createOrder )



module.exports = router;