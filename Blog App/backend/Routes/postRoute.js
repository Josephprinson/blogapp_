const express =require('express');
const router = express.Router();
const post = require('../Model/post');
const postModel = require('../Model/post');

router.use(express.json());

//to add blog
router.post('/addblog',(req,res)=>{
    const blog = req.body;
    console.log(blog)
    try{
        const data = post(req.body).save()
        res.status(200).json({message:"blog added",blog})
    }catch(error){
        res.json({message:"unable to add blog"})

    }
})


router.get('/viewwall',async(req,res)=>{
    try{
        const data = await post.find();
        res.status(200).json(data)
    }catch(error){
        console.log(error)

    }
})

//delete

router.delete('/remove/:id',async(req,res)=>{
    try{
        const data = await postModel.findByIdAndDelete(req.params.id);
        res.status(200).send({message:"blog deleted"})
    }catch(error){
        res.status(404).send({message:"no blog found"});

    }
})

//UPDATE
router.put('/edit/:id',async(req,res)=>{
    try{
        var userid = req.params.id;
        var item = req.body;
        const data = await postModel.findByIdAndUpdate(userid,item);
        res.status(200).send({message:"blog updated successfully"})
    }catch(error){
        console.log(error)
       

    }
})

module.exports=router;