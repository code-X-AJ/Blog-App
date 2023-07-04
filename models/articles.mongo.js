const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const { articleById } = require('./articles.model')

const articleSchema = new mongoose.Schema({
    title :{
        required:true,
        type:String
    },
    description :{
        type:String
    },
    markdown :{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    slug:{
        type:String,
        required:true,
        unique:true
    }
})

articleSchema.pre('validate', (req,res,next)=>{
    if(this.title) {
        this.slug = slugify(this.title, {lower: true, strict:true})
    }
    next();
})

module.exports = mongoose.model('Article', articleSchema)
