const express = require('express')
const path = require('path')
const connectToDB = require('./config/db')
const Article = require('./models/Article')

const app = express() // initialiaze express app

// connecting to database
const PORT = process.env.PORT || 5000
connectToDB()
	.then(() => {
		app.listen(PORT, () =>
			console.log(`Server listening for requests on port: ${PORT}`)
		)
	})
	.catch((err) => console.log(err))

// view engine setup
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'pug')

// middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) // to accept form data to req.body

// routes
// index route
app.get('/', (req, res) => {
	res.redirect('/articles')
})

// GET- all articles
app.get('/articles', async (req, res) => {
	try {
		const articles = await Article.find()
		res.render('index', { title: 'Articles', articles: articles })
	} catch (err) {
		console.log('cannot get articles!!')
	}
})

// GET- form to add a article
app.get('/articles/add', (req, res) => {
	res.render('add_article', { title: 'Add Article' })
})

// POST- add a new article
app.post('/articles/add', async (req, res) => {
	const { title, author, body } = req.body
	try {
		const article = new Article({
			title,
			author,
			body,
		})
		await article.save()
		res.redirect('/articles')
	} catch (err) {
		console.log('Cannot save article!!')
		console.log(err)
	}
})

// GET- a single article
app.get('/articles/:id', async (req, res) => {
	try {
		const article = await Article.findOne({ _id: req.params.id })
		res.render('article', { article: article })
	} catch (err) {
		console.log(err)
	}
})

// GET- edit article form
app.get('/articles/edit/:id', async (req, res) => {
	try {
		const article = await Article.findById(req.params.id)
		res.render('edit_article', { title: 'Edit Article', article: article })
	} catch (err) {
		console.log(err)
	}
})

// POST- to update article
app.post('/articles/edit/:id', async (req, res) => {
	const { title, author, body } = req.body
	const articleFields = {}
	if (title) articleFields.title = title
	if (author) articleFields.author = author
	if (body) articleFields.body = body

	try {
		await Article.findByIdAndUpdate(
			req.params.id,
			{
				$set: articleFields,
			},
			{ new: true }
		)
		res.redirect(`/articles/${req.params.id}`)
	} catch (err) {
		console.log('Cannot save article!!')
		console.log(err)
	}
})

// DELETE- to delete a article
app.delete('/articles/:id', async (req, res) => {
	try {
		await Article.findByIdAndRemove(req.params.id)
		res.json({ redirect: '/articles' })
	} catch (err) {
		console.log(err)
	}
})
