const mongoose = require('mongoose')
//this is the menu schema
const  menuitemschema= new mongoose.Schema({
    name: {type: String, required: true,unique: true},
    price: {type: Number, required: true},
    taste: {type: String, enum:['sweet','spicy','sour'], required: true},
    is_drink: {type: Boolean, default: false},
    is_veg: {type: Boolean, required: true, default: false}  ,
})

const MenuItem= mongoose.model('menuitem', menuitemschema)

module.exports= MenuItem
