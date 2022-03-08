const mongoose = require('mongoose');
const userSchema =  new mongoose.Schema(
{
    name:String,
	balance:{type:Number,default:100},// Default balance at user registration is 100
	address: String,
	age: Number,
 	gender: {
		 type:String,
		 enum:["male","fenale","other"]
			 },
	isFreeAppUser: {type:Boolean,default:false},// Default false value.
	
			});

	module.exports = mongoose.model('User', userSchema) 
