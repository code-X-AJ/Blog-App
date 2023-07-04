const express = require('express');
const homeRouter = express.Router();

const { getHomePage } = require('./home.controller')

homeRouter.get('/', getHomePage)

module.exports = {
    homeRouter
}