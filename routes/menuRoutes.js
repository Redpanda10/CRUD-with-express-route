const express = require('express');
const router = express.Router();

const MenuItem=require('../models/menu')
//CRUD
//create menu items
router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newitem=new MenuItem(data)
        await newitem.save()
        res.send(newitem.name +"  added successfully")
    }catch(err){
        res.status(400).json({message:err.message})
    }
})
//Read the menu items
router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find()
        console.log("data fetched successfully")
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(400).json({message:err.message})
    }
})

//read menu items by taste
router.get('/:taste',async(req,res)=>{
    try{
        const req_taste=req.params.taste
        if(req_taste=='sweet'||req_taste=="sour"||req_taste=="spicy"){
            const data=await MenuItem.find({taste:req_taste})
            console.log("found the match")
            res.status(200).json(data)
        }
        
    }catch(err){
        console.log(err)
        res.status(400).json({message:err.message}+" not found")
    }
})

module.exports = router