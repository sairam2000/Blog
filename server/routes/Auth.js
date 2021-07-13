const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/User')

const router = express.Router()



router.post('/register',(req,res)=>{
    const {email, username, password} = req.body
    if(!email || !username || !password){  
        res.status(401).json({error: 'require all fields'})
    }
    else{
        try {
            User.findOne({$or : [
                {username:username},{email:email}
            ]},(err,tempuser)=>{
                if(tempuser){
                    res.status(401).json({error: 'already user exists with same username or email'})
                }else{
                    bcrypt.hash(password,5).then(hashedPassword=>{
                        const user = User({email:email,username:username,password:hashedPassword})
                        user.save().then(newuser=>{
                            const {password, ...other} = newuser._doc
                            res.status(200).json({user: other})
                        }).catch(error=>{
                            res.status(401).json({error : "something went wrong"})
                        })
                    })
                } 
            })
        } catch (error) {
            console.log(error)
        }

    }   
})



router.post('/login',(req,res)=>{
    if(!req.body.email || !req.body.password){
        res.status(401).json({error: "require all fields"})
    }
    else{
        try {
            User.findOne({email: req.body.email},(error,user)=>{
                if(error){
                    res.status(401).json({error:"something went wrong"})
                }
                else{
                    if(!user){
                        res.status(401).json({error:"invalid email or password"})
                    }
                    else{
                        bcrypt.compare(req.body.password, user.password).then(result=>{
                            if(result){
                                const {password, ...other} = user._doc
                                res.status(200).json(other)
                            }
                            else{
                                res.status(401).json({error: "invalid email or password"})
                            }
                        })
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
})




module.exports = router