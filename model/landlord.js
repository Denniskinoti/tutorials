const mongoose = require('mongoose');

const landlordSchema = new mongoose.Schema({
	name :{type:String,required:true, trim:true, maxLength:5},	
	email:{type:String, required:true,trim:true, unique:true},
	phone_number: {type:Number, required:true, unique:true, maxLength:10,trim:true},
	password: {type:String,required:true,trim:true}	
	
	
	
},{timestamps:true})

module.exports = mongoose.model('landlord',landlordSchema)