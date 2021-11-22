const express = require('express')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()
const db = require('./db.json')

// const app = express()
const PORT = process.env.PORT || 5000

server.use('view engine', 'ejs')
server.use(express.static('public'))
server.use(middlewares)
server.use(router)

server.listen(PORT, () => {
	console.log(`Server listening for requests on port: ${PORT}`)
})

// GET-  get all cats
server.get('/cats', (req, res) => {
	res.json(db.cats)
})

server.post('/cats', (req, res) => {
	const { name, age, breed } = req.body

	db.cats.push({
		name,
		age,
		breed,
	})
	res.status(201).json({ msg: 'cat added' })
})
