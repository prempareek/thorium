const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body
  let savedData = await userModel.create(data);
  res.send({ userinfo: savedData });

};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  const token = jwt.sign
  ({ userId: user._id.toString(),batch: "thorium",organisation: "FUnctionUp",},"my-secret-key");
           res.setHeader("x-auth-token", token);
           console.log(token);
           res.send({ status: true, data: token });
  };

const getUserData = async function (req, res) {
  let id = req.params.userId;
  let user = await userModel.findById(id);
  res.send({ status: true, msg: user });
};

  

const updateUser = async function (req, res) {
   let userId = req.params.userId;
      let user = await userModel.findById(userId);
        if (!user) {
          return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

const deleteUser = async function(req,res){

  let DeletedUser = await userModel.findByIdAndUpdate(req.params.userId)(
  { _id: id },
  { $set: { isDeleted: true } },
  { new: true }
  )

  res.send({status:true,msg:DeletedUser})

  };







module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser;
