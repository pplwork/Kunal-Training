const express = require('express')
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()
const db = require('./db.json')

// const app = express()
const PORT = process.env.PORT || 5000

// view engine setup
server.set('views', path.resolve(__dirname, 'views'))
server.set('view engine', 'ejs')

server.use(express.static('public')) // to specify static assets
server.use(express.json()) // to parse json data of req into javascript data
server.use(express.urlencoded({ extended: true })) // to access form-data on req.body
server.use(middlewares)
server.use(router)

// index route
server.get('/', (req, res) => {
	res.redirect('/cats')
})

// GET- get all cats
server.get('/cats', (req, res) => {
	res.render('index', { title: 'Cats', cats: db.cats })
	// res.status(200).json(db.cats)
})

// GET- a single cat data
server.get('/cats/:id', (req, res) => {
	try {
		const cat = db.cats.find((cat) => cat.id === req.params.id)
		if (cat) {
			res.status(200).json(cat)
		} else {
			res.status(404).json({ msg: 'cat does not exists' })
		}
	} catch (err) {
		res.status(500).json({ msg: 'cannot find cat' })
	}
})

// POST- add a new cat data
server.post('/cats', (req, res) => {
	const { name, age, breed } = req.body
	try {
		db.cats.push({ name, age, breed })
		res.status(201).json({ msg: 'a cat data is added successfully' })
	} catch (err) {
		res.status(500).json({ msg: 'cat data not added' })
	}
})

// PUT- update a cat with given id
server.put('/cats/:id', (req, res) => {
	const id = req.params.id
	const { name, age, breed } = req.body
	try {
		db.cats = db.cats.map((cat) => {
			return cat.id === id ? { id, name, age, breed } : cat
		})
		res
			.status(200)
			.json({ msg: `a cat with id: ${id} is updated successfully` })
	} catch (err) {
		res.status(500).json({ msg: 'cat not updated' })
	}
})

// DELETE- delete a cat data
server.delete('/cats/:id', (req, res) => {
	const id = req.params.id
	try {
		db.cats = db.cats.filter((cat) => cat.id !== id)
		res
			.status(200)
			.json({ msg: `a cat with id: ${id} is deleted successfully` })
	} catch (err) {
		res.status(500).json({ msg: 'cat not deleted' })
	}
})

// listen for requests
server.listen(PORT, () => {
	console.log(`Server listening for requests on port: ${PORT}`)
})
