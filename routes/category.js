const express = require('express');
require('express-group-routes')

const CategoryController = require('../controllers/category')

const app = express();

app.group('/api', router => {
    router.get('/categories', CategoryController.index)
    router.post('/categories', CategoryController.store)
})

module.exports = app
