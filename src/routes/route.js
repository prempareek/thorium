const express = require('express');
const router = express.Router();



router.get('/movies', (req, res) => {

    res.send('["The Shining","Incendies","Rang de Basanti","Finding Demo"]');
});


router.get('/movies/:moviesId', (req, res) => {

    const movies = ["The Shining", "Incendies", "Rang de Basanti", "Finding Demo"];
    const request = req.params.moviesId;
    if (request < movies.length) {
        res.send(movies[request])
    } else {

        res.send('not a valid ID');
    }
})



router.get('/films', (req, res) => {


    res.send([
        { "id": 1, "name": "The Shining" },
        { "id": 2, "name": "Incendies" },
        { "id": 3, "name": "Rang de Basanti" },
        { "id": 4, "name": "Finding Demo" }
    ]);

});
router.get('/films/:filmld', (req, res) => {
    const movieList = [
        { "id": 1, "name": "The Shining" },
        { "id": 2, "name": "Incendies" },
        { "id": 3, "name": "Rang de Basanti" },
        { "id": 4, "name": "Finding Demo" }
    ];
    let request = req.params.filmld;
    let response = false;
    for (let index = 0; index < movieList.length; index++) {
        if (movieList[index].id == request) {
            response = true;
            res.send(movieList[index]);
            break;
        }
    }
    if (response == false) {
        res.send('No film exists with this id');
    }

})






module.exports = router;