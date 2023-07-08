const express = require('express')
const articlesRouter = express.Router()
const {
    httpGetAllArticles,
    httpNewArticle,
    httpPostNewArticle,
    httpGetArticlesById,
    httpDeleteArticlesById,
    httpGetAndEditArticlesById,
    httpEditArticlesById,
} = require('./articles.controller')

articlesRouter.get('/', httpGetAllArticles)
articlesRouter.get('/new', httpNewArticle)
articlesRouter.post('/new', httpPostNewArticle)
articlesRouter.get('/:slug', httpGetArticlesById)
articlesRouter.get('/edit/:id', httpGetAndEditArticlesById)
articlesRouter.put('/:id', httpEditArticlesById)
articlesRouter.delete('/:id', httpDeleteArticlesById)


module.exports = {
    articlesRouter
}