const express = require('express')
const mongoose = require('mongoose')
const Post = require('../models/Post')

const router = express.Router()

router.post('/',(req,res)=>{
    const post = Post(req.body)
    try {
        post.save().then((newpost) => {
            res.status(200).json(newpost)
        }).catch(err=>{
            res.status(401).json(err)
        })
    } catch (error) {
        res.status(401).json(error)
    }
})

router.put('/:id',(req,res)=>{
    try {
        Post.findById(req.params.id,(error, post)=>{
            (!post) && res.status(401).json({msg:"post not available"})
            if(post && post.username == req.body.username){
                Post.findByIdAndUpdate(req.params.id,{$set: req.body},{ new: true ,useFindAndModify: false},(err,newpost)=>{
                    if(err){
                        res.status(401).json({error:"error occured while updating"})
                    }
                    else{
                    res.status(200).json(newpost)
                    }
                })
            }else  if(post){
                res.status(401).json({msg:"you are not allowed to edit this post"})
            }
        })
    } catch (error) {
        res.status(401).json(error)
    }
})


router.delete('/:id',(req,res)=>{
    try {
        Post.findById(req.params.id,(err,post)=>{
            if(err){
                res.status(401).send('something went wrong')
            }
            else{
                (!post) && res.status(401).json({msg:"post not available"})
                 if(post && post.username == req.body.username){
                    post.delete().then(res.status(200).json({msg:"Post has been deleted..."}))
                    .catch((error)=>{res.status(401).json(error)})
                }
                else if(post){
                    res.status(401).json({error:"you are not allowed to delete this post"})
                }
            }
        })
    } catch (error) {
        res.status(401).json(error)
    }
})


router.get('/:id',(req,res)=>{
    try {
        Post.findById(req.params.id,(err,post)=>{
            if(err){
                res.status(401).json({error:"something went wrong while fetching"})
            }
            else{
                if(post){
                    res.status(200).json(post)
                }
                else{
                    res.status(401).json({msg:"post doesnt exists"})
                }
            }
        })
    } catch (error) {
        res.status(401).json(error)
    }
})


router.get('/', async (req,res)=>{
    const username = req.query.user
    const catName = req.query.cat
    let posts
    try {
        if(username){
            posts = await Post.find({username})
        }   
        else if(catName){
            posts = await Post.find({categories: {
                $in: [catName]
            }})
        }
        else{
            posts = await Post.find()
        }
        res.status(200).json({posts})
    } catch (error) {
        res.status(401).json(error)
    }
})

module.exports = router