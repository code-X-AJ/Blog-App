const express = require('express')
const articlesRouter = express.Router()
const {
    httpGetAllArticles,
    httpNewArticle,
    httpPostNewArticle,
    httpGetArticlesById,
} = require('./articles.controller')

articlesRouter.get('/', httpGetAllArticles)
articlesRouter.get('/new', httpNewArticle)
articlesRouter.post('/new', httpPostNewArticle)
articlesRouter.get('/:slug', httpGetArticlesById)


module.exports = {
    articlesRouter
}