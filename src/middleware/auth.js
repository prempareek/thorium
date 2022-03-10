const jwt =require("jsonwebtoken");
const userModel = require("../models/userModel");


const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];
        if (!token) return res.send({ status: false, msg: "token must be present" });

let decodedToken = jwt.verify(token, "functionup-thorium");
   if (!decodedToken)
       return res.send({ status: false, msg: "token is invalid" });

       req.isDecodedTokenId=decodedToken.userId

       next();
};


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
        let userId = req.params.userId;
        let tokenId=req.isDecodedTokenId
        let userDetails = userModel.findById(userId);
        if (!userDetails) return  res.send({status:false,msg:"user not exist"})
        if(!tokenId) return res.send({status:false.valueOf,msg:"not authorized"})
next()




};


module.exports.authenticate=authenticate
module.exports.authorise=authorise