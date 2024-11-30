const express = require('express');
const router = express.Router();

const person = require('../models/person');
//CRUD

//create person data
router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newperson=new person(data)
        await newperson.save()
        res.send(newperson.name +"  added successfully")
    }
    catch(err){
        console.log(err)
        res.status(400).json({message:err.message})
    }
})

//Read the person data
router.get('/',async(req,res)=>{
    try{
        const data= await person.find()
        console.log("data fetched successfully")
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(400).json({message:err.message})
    }
})

//read or search the person data by their name
router.get('/:findname',async(req,res)=>{
    try{
        const findname=req.params.findname;//extract the name from the db
        const response=await person.find({name:findname})
        console.log('found the match')
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(404).json({message:err.message}+" not found")
    }
})

//Update the person data
router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id
        const updatedData=req.body
        const response=await person.findByIdAndUpdate(personId,updatedData,{
            new:true,//return the updated data of the person
            runValidators:true//run mongoose validation
        })
        if(!updatedData){
            return res.status(404).json({error:"person not found"})
        }
        console.log("data updated successfully")
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(404).json({message:err.message}+" not found")
    }
})
//delete person data
router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id
        const response=await person.findByIdAndDelete(personId)
        if(!response){
            return res.status(404).json({error:"person not found"})
        }
        console.log("data deleted successfully")
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error:" not found"})
    }
})


//export it
module.exports=router;