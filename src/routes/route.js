const express = require('express');
const router = express.Router();
const memeController = require("../controllers/memeController")



router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})




router.post("/memes", memeController.memepost)




module.exports = router;