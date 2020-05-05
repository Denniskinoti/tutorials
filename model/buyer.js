const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const buyerSchema = new mongoose.Schema({
	
	username :{type:String, trim:true, maxLength:5},	
	email:{type:String,trim:true},
	phone_number : {type:String, trim:true},
	password: {type:String,required:true}

	
	

})

//generating a hash
buyerSchema.methods.generateHash = (password)=>{
	return bcrypt.hash(password,10);
	
}

//checking if password is valid
buyerSchema.methods.validPassword = (password)=> {
	return bcrypt.compare(req.body.password, user.password)
}

module.exports= mongoose.model("buyer",buyerSchema)
