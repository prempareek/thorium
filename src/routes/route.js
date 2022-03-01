const express = require('express');
const router = express.Router();
const BookController = require("../controllers/BookController")



router.post('/createBook', BookController.createBook)

router.get('/bookList', BookController.getBook)

router.post('/getBooksInYear', BookController.booksInYear)

router.post('/getParticularBooks', BookController.particularBooks)

router.get('/getINRBooks', BookController.getINRBooks)

router.get('/getRandomBooks', BookController.getRandomBooks)

module.exports = router;