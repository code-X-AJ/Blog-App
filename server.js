const express = require('express');
require('dotenv').config();

const { connectDB } = require('./services/mongo')
const { articlesRouter } = require('./router/articles/articles.router') 
const { homeRouter } = require('./router/home/home.router') 

const app = express();

const port = process.env.PORT;

app.use(express.json())

app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs')

app.use('/', homeRouter)
app.use('/articles', articlesRouter)

async function startServer(){
    await connectDB();
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

startServer();