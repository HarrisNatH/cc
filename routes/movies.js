const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('You are in movies (router)')
})

router.get('/dragon_prince', (req,res)=>{
    res.send('You are in Dragon Prince movie!')
})

module.exports = router
