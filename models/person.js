const mongoose= require("mongoose")

const personschema= new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    city: {type: String, required: true},
    email:{type: String, required: true,unique: true},
})

const person= mongoose.model("person", personschema)

module.exports= person