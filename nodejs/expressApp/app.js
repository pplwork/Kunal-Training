const express = require('express')
const path = require('path')

const app = express() // initialiaze express app

// view engine setup
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'pug')

// home route
app.get('/', (req, res) => {
	const articles = [
		{
			id: 1,
			title: 'Article One',
			body: 'This is aticle one body',
			author: 'John Doe',
		},
		{
			id: 2,
			title: 'Article Two',
			body: 'This is aticle two body',
			author: 'Sam Smith',
		},
		{
			id: 3,
			title: 'Article Three',
			body: 'This is aticle three body',
			author: 'Ted Philips',
		},
	]
	res.render('index', { title: 'Articles', articles: articles })
})

// add article route
app.get('/articles/add', (req, res) => {
	res.render('add_article', { title: 'Add a Article' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`Server listening for requests on port: ${PORT}`)
})
