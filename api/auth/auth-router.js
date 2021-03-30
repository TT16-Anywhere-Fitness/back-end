const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express')
const { jwtSecret } = require('../../config/secrets')
const router = express.Router()
const Auth = require('./auth-model')
//auth

router.post("/register", (req,res) => {
    const user = req.body

    if(!user.username || !user.password) {
        res.status(400).json({message: "New user requires name and password."})
    }

    if(!user.role && user.role !== "client" && user.role !== "instructor") {
        res.status(400).json({message: "New user requires valid role"})
    }

    const hash = bcryptjs.hashSync(user.password, 10);
    user.password = hash;

    if(user.role === 1 ){
        Auth.addInstructor(user)
        .then(newInstructor => {
            res.status(201).json(newInstructor)
        })
        .catch(err => {
            res.status(500).json({message:"Instructor not registered"})
        })
    } else {
        Auth.addClient(user)
        .then(newClient => {
            res.status(201).json(newClient)
        })
        .catch(err =>{
            res.status(500).json({message: "Client not registered"})
        })
    }
})

router.post("/login", (req,res,next) => {
    const user = req.body

    if(!user.username || !user.password) {
        res.status(400).json({message:"Log in requires valid username & password"})
    }
    else if(user.role !== 2 && user.role !== 1) {
        res.status(400).json({message:"Log in requires valid role"})
    }
    Auth.findByName(user.username, user.role).then(logger =>{
        if(logger && bcryptjs.compareSync(user.password, logger.password)) {
            const token = generateToken(user)
            res.status(200).json({message:"Welcome!", token})
        }else {
            res.status(401).json({message:"Invalid credentials"})
        }
    })
    .catch(next)
})

function generateToken(user){
    const payload = {
      subject: user.id, 
      username: user.username,
      role: user.role
    }
    const options = {
      expiresIn: "6hrs"
    }
    return jwt.sign(payload, jwtSecret, options)
  }

  module.exports = router;