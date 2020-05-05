const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
	text:{type: String,  trim:true},
	name: {type: id : {mongoose.Schema.Types.ObjectId, ref:'category'},username :{type:String,required:true, trim:true, maxLength:5}}
})

module.exports= mongoose.model("property",propertySchema)