const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('You are in users!')
})

router.get('/harris', (req,res)=>{
    res.send('You are in Harris\'s domain!')
})

module.exports = router