const express = require('express');
const router = express.Router();
const BookController = require("../controllers/BookController")



router.post('/createBook', BookController.createBook)

router.get('/bookList', BookController.getBook)

router.get('/getBooksInYear', BookController.booksInYear)

router.get('/getParticularBooks', BookController.particularBooks)

router.get('/getINRBooks', BookController.getINRBooks)

router.get('/getRandomBooks', BookController.getRandomBooks)

module.exports = router;