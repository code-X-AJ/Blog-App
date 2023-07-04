const { 
    saveArticle,
    getAllArticle,
    articleById,
} = require('../../models/articles.model')
const Article = require('../../models/articles.mongo');

async function httpGetAllArticles(req,res) {
    return getAllArticle(req,res)
}

function httpNewArticle(req,res) {
    return res.render('articles/new', {article: new Article()});
}

function httpPostNewArticle(req,res) {
    return saveArticle(req,res);
}

function httpGetArticlesById(req,res) {
    return articleById(req,res)
}

module.exports = { 
    httpGetAllArticles,
    httpNewArticle,
    httpPostNewArticle,
    httpGetArticlesById,
}