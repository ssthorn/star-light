const User = require("../models/user")
const express = require('express');
const router = express.Router();

router.get('/' , async (req, res)=>{
    try{
        const users = await User.find();
        res.send({
            // status: 200,
            success: true,
            data: users
        })
    }catch(err){
        res.send({
            // status:500,
            success: false,
            data: err.message
        })
    }
})

router.post('/', async (req, res)=>{
    try{
        const newUser = await User.create(req.body);
        res.send({
            // status: 200,
            success: true,
            data: newUser
        })
    }catch(err){
        res.send({
            // status:500,
            success: false,
            data: err.message
        })

    }
})

router.get('/:id', async(req,res) =>{
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            throw new Error("No user by that ID here!")
        }
        res.send({
            success: true,
            data: user
        })
    }catch(err){
        console.log(err)
        res.send({
            success: false,
            data: err.message
        })
    }
})

router.delete('/:id', async(req,res) =>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.send({
            success: true,
            data: user
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})

router.put('/:id', async(req,res) =>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.send({
            success: true,
            data: user
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})

module.exports = router;