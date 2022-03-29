const Item = require("../models/item")
//defines my schema for db item

const express = require('express');
//more express..

const router = express.Router();
//declares I'll be using express.Router as 'router'

router.get('/' , async (req, res)=>{
    
    try{
        const items = await Item.find();
        res.send({
            // status: 200,
            success: true,
            data: items
        })
    }catch(err){
        res.send({
            // status:500,
            success: false,
            data: err.message
        })

    }
})
//sending json data to the front end
//notes if what is returned is 'good' or not
//get route for / , async await to try to find database item, if so the data is returned, iff not, error.

router.post('/', async (req, res)=>{
    try{
        const newItem = await Item.create(req.body);
        res.send({
            // status: 200,
            success: true,
            data: newItem
        })
    }catch(err){
        res.send({
            // status:500,
            success: false,
            data: err.message
        })

    }
})
//new item created gets added to database and state.
//route to post new item

//now that we're using react, all 7 routes are not necessary.

router.get('/:id', async(req,res) =>{
    try{
        const item = await Item.findById(req.params.id);
        if(!item){
            //this rectifies the return when an item doesn't exist, instead of 
            //returning true but with null data
            throw new Error("No item by that ID here!")
        }
        res.send({
            success: true,
            data: item
        })
    }catch(err){
        console.log(err)
        res.send({
            success: false,
            data: err.message
            //this is also changed to fix return. this shows the error message. all other instances of 'err' changed to this as well.
        })
    }
})
//show route

router.delete('/:id', async(req,res) =>{
    try{
        const item = await Item.findByIdAndDelete(req.params.id);
        res.send({
            success: true,
            data: item
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})
//delete route

router.put('/:id', async(req,res) =>{
    try{
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new:true});
        //new update defaults to false, so a third parameter is called to rectify this.
        res.send({
            success: true,
            data: item
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})
//update route

//when all routes are completed, they can be tested in Thunder Client



module.exports = router;