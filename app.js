// 1. import from libraries
const express = require('express')
const app = express()

// 2. middleware 
const movieRoute = require('./routes/movies')
app.use('/movies', movieRoute)

const userRoute = require('./routes/users')
app.use('/users', userRoute)

// 3. create a route
app.get('/', (req,res) => {
	res.send('Hello welcome to my home page')
})

// 4. start the server
app.listen(3000,() => {
	console.log("server are running")
})