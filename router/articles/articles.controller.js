const { 
    saveArticle,
    getAllArticle,
    getArticleById,
    deleteArticleById,
    getAndEditArticlesById,
    editArticlesById,
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
    return getArticleById(req,res)
}

function httpDeleteArticlesById(req,res) {
    return deleteArticleById(req,res)
}

function httpGetAndEditArticlesById(req,res){
    return getAndEditArticlesById(req,res)
}

function httpEditArticlesById(req,res){
    return editArticlesById(req,res)
}


module.exports = { 
    httpGetAllArticles,
    httpNewArticle,
    httpPostNewArticle,
    httpGetArticlesById,
    httpDeleteArticlesById,
    httpGetAndEditArticlesById,
    httpEditArticlesById,

}