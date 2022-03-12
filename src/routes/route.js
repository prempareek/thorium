const express = require('express');
const router = express.Router();
const weatherController = require("../controllers/weatherController")



router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})



router.get("/getweather", weatherController.getWeather)




module.exports = router;