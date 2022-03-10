const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const validateToken = async function (req, res, next) {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });

      let token = req.headers["x-Auth-token"];
      if (!token) token = req.headers["x-auth-token"];
          if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "my-secret-key");
     if (!decodedToken)
         return res.send({ status: false, msg: "token is invalid" });

         next();
};







module.exports.validateToken=validateToken


  