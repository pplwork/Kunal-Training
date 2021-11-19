const express = require('express')
const path = require('path')
const connectToDB = require('./config/db')
const Article = require('./models/Article')

const app = express() // initialiaze express app

// connecting to database
const PORT = process.env.PORT || 5000
connectToDB()
app.listen(PORT, () => {
	console.log(`Server listening for requests on port: ${PORT}`)
})

// view engine setup
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'pug')

// home route
app.get('/', async (req, res) => {
	try {
		const articles = await Article.find()
		res.render('index', { title: 'Articles', articles: articles })
	} catch (err) {
		console.log('cannot get articles!!')
	}
})

// add-article route
app.get('/articles/add', (req, res) => {
	res.render('add_article', { title: 'Add Article' })
})
