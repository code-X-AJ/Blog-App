const Article = require('./articles.mongo');

async function getAllArticle(req,res){
    const articles = await Article.find().sort({createdAt:'desc'});
    return res.render('articles/index', { articles:articles });
};

async function saveArticle(req,res,) {
    let article = new Article({
        title : req.body.title,
        description : req.body.description,
        markdown : req.body.markdown
    });
    try {   
        article = await article.save();
        return res.redirect(`/${article.slug}`);
    } catch (err) {
        console.error(err);
        return res.render('articles/new',{ article:article });
    }
}

async function getArticleById(req,res){
    const article = await Article.findOne({slug : req.params.slug });
    if(article == null)  return res.redirect('/');
    
    return res.render('articles/show', {article:article});
}

async function deleteArticleById(req,res){
    console.log(req.params.id);
    await Article.findByIdAndDelete(req.params.id)
    return res.redirect('/')
}

async function getAndEditArticlesById(req,res){
    const article = await Article.findById(req.params.id)
    return res.render('articles/edit', {article:article})
}

async function editArticlesById(req,res){
        let article = await Article.findById(req.params.id)
            article.title = req.body.title
            article.description = req.body.description
            article.markdown = req.body.markdown
        try {   
            article = await article.save();
            return res.redirect(`/${article.slug}`);
        } catch (err) {
            console.error(err);
            return res.render(`articles/edit`,{ article:article });
        }
    }


module.exports = {
    saveArticle,
    getAllArticle,
    getArticleById,
    deleteArticleById,
    getAndEditArticlesById,
    editArticlesById,
}