const express = require('express');
const router = express.Router();

let players = [];
router.post('/players', function(req, res) {
    let player = req.body;
    let playerName = player.name
    for (i = 0; i < players.length; i++) {
        if (players[i].name == playerName) {
            return res.send("player already exist")
        }
    }
    players.push(player);
    return res.send(players);
});


router.post('/players/:playerName/bookings/:bookingId', function(req, res) {
    let name = req.params.playerName
        //let bookingId=req.params.bookingId
    let isPlayerPresent = false
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == name) {
            isPlayerPresent = true
        }
    }
    if (!isPlayerPresent) {
        return res.send('player not present')
    }





    let booking = req.body
    let bookingId = req.params.bookingId
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == name) {
            let isbookingpresent = false
            for (let j = 0; i < players[i].bookings.length; j++) {
                if (players[i].bookings[j].bookingNumber == bookingId) {
                    return res.send('booking with this id player already exist so try with new id')
                }
            }

            players[i].bookings.push(booking)
        }
    }
    res.send(players)








});

















module.exports = router;