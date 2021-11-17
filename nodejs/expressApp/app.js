const express = require('express')
const path = require('path')

const app = express() // initialiaze express app

// view engine setup
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'pug')

// home route
app.get('/', (req, res) => {
	res.send('Hello from Express App')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`Server listening for requests on port: ${PORT}`)
})
