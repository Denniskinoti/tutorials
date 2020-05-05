const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
	name:{type: String, required:true, trim:true, maxLength:32},
	description: {type:String, required:true, trim:true},
	price: {type: Number,  required:true, maxLength:32},
	category: {type:  mongoose.Schema.Types.ObjectId, ref:'category',required:true},
	quantity: {type: Number , required:true, required: true},
	sold:{type: Number, default: 0},
	photo: { data: Buffer, contentType: String}
	
})

module.exports= mongoose.model("property",propertySchema)