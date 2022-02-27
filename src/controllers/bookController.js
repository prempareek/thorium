const bookSchema = require("../models/bookschema")

const newBooksData = async function(req, res) {
    let booksData = req.body
    let savedData = await bookSchema.create(booksData)
    res.send({ newBook: savedData })
}

const getBooksData = async function(req, res) {
    let allBooks = await bookSchema.find()
    res.send({ bookList: allBooks })
}

module.exports.newBooksData = newBooksData
module.exports.getBooksData = getBooksData