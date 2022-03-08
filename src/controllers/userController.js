const UserModal = require("../models/userSchema")
const mongoose = require('mongoose');

const createUser = async function (req, res){
let data=req.body
let User = await UserModal.create(data)
    res.send({user : User})

}



module.exports.createUser = createUser
