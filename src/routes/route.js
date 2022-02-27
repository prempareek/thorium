const express = require('express');
const router = express.Router();
const UserModel = require("../models/bookschema.js")
const bookController = require("../controllers/bookController")



router.post("/createBooksName", bookController.newBooksData)

router.get("/getBooksData", bookController.getBooksData)

module.exports = router;