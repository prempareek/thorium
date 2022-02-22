const welcome = require("../logger")
const mydetails = require("../util/helper")
const format = require("../validator/Formatter")
const express = require('express');
//var  array  = require('lodash/chunk');
const lodash = require('lodash')

const router = express.Router();

router.get('/test-me', function(req, res) {
    welcome.welcomeall();
    mydetails.date();
    mydetails.month();
    mydetails.batchinfo();
    format.Trim("   functionup     ");
    format.lowerCase("functionup");
    format.upperCase("FuNcTiOnUp");
    res.send('My first ever api!')
});


router.get('/hello', function(req, res) {
    let month = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    console.log(lodash.chunk(month, 3))

    let oddnumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(lodash.tail(oddnumbers))

    let array1 = [1, 2, 3, 4, 5]
    let array2 = [2, 3, 4, 5, 6]
    let array3 = [3, 4, 5, 6, 7]
    let array4 = [4, 5, 6, 7, 8]
    let array5 = [5, 6, 7, 8, 9]
    console.log(lodash.union(array1, array2, array3, array4, array5))

    const newPairs = [
        ["horrorThe", "Shining"],
        ["drama", "Titanic"],
        ["thriller", "Shutter Island"],
        ["fantasy", "Pans Labyrinth"]
    ]
    console.log(lodash.fromPairs(newPairs))

    res.send("My First Assignment")




});


module.exports = router;