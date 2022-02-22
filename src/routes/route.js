const express = require('express');
const router = express.Router();

router.get('/movies', function(req, res) {

    res.send('["The Shining", "Incendies", "Rang de Basanti", "Finding Demo"]');

    console.log(movies);

})

router.get('/movies/:movieId', function(req, res) {

    mov = ["The Shining", "Incendies", "Rang de Basanti", "Finding Demo"];

    let value = req.params.movieId;
    if (value > mov.length - 1) {
        res.send("No movie exists with this id")
    } else {
        res.send(mov[value]);
    }

})

router.get('/films', function(req, res) {

    res.send([{ id: 1, name: 'The Shining' }, { id: 2, name: 'Incendies' }, { id: 3, name: 'Rang de Basanti' }, { id: 4, name: 'Finding Demo' }]);


});


router.get('/films/:filmId', function(req, res) {
    let movi = [{ id: 1, name: 'The Shining' }, { id: 2, name: 'Incendies' }, { id: 3, name: 'Rang de Basanti' }, { id: 4, name: 'Finding Demo' }];
    let value = req.params.filmId;
    let found = false;
    if (value > movi.length) {
        res.send("not exist")
    }

    for (i = 0; i < movi.length; i++) {
        if (movi[i].id == value) {
            found = true
            res.send(movi[i])


            break;

        }
    }
})

module.exports = router;