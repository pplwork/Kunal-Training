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
app.use(express.urlencoded({ extended: true }))

// get articles
app.get('/', async (req, res) => {
	try {
		const articles = await Article.find()
		res.render('index', { title: 'Articles', articles: articles })
	} catch (err) {
		console.log('cannot get articles!!')
	}
})

// post new article
app.post('/articles/add', async (req, res) => {
	const { title, author, body } = req.body
	try {
		const article = new Article({
			title,
			author,
			body,
		})
		await article.save()
		res.redirect('/')
	} catch (err) {
		console.log('Cannot save article!!')
		console.log(err)
	}
})

// add-article route
app.get('/articles/add', (req, res) => {
	res.render('add_article', { title: 'Add Article' })
})
