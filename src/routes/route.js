const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authencate=require("../middleware/authenticate")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/userRgistration", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",authencate.validateToken, userController.getUserData)

router.put("/users/:userId",authencate.validateToken, userController.updateUser)
//delete user mark as is deleteted true
router.delete("users/:userId",authencate.validateToken,userController.deleteUser)

module.exports = router;