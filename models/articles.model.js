const Article = require('./articles.mongo');

async function getAllArticle(req,res){
    const articles = await Article.find().sort({createdAt:'desc'});
    return res.render('articles/index', { articles:articles });
};

async function saveArticle(req,res) {
    let article = new Article({
        title : req.body.title,
        description : req.body.description,
        markdown : req.body.markdown
    });
    try {   
        article = await article.save();
        return res.redirect(`/articles/${article.id}`);
    } catch (err) {
        console.error(err);
        return res.render('articles/new',{ article:article });
    }
}

async function saveArticle(req,res) {
    let article = new Article({
        title : req.body.title,
        description : req.body.description,
        markdown : req.body.markdown
    });
    try {   
        article = await article.save();
        return res.redirect(`/articles/${article.id}`);
    } catch (err) {
        console.error(err);
        return res.render('articles/new',{ article:article });
    }
}

async function articleById(req,res){
    const article = await Article.find(slugs:req.params.slug);
    if(article == null)  return res.redirect('/');
    return res.render('articles/show', {article:article});
}

module.exports = {
    saveArticle,
    getAllArticle,
    articleById,
}