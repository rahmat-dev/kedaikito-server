const express = require('express');
require('express-group-routes')

const MenuControlelr = require('../controllers/menu')

const app = express();

app.group('/api', router => {
    router.get('/menus', MenuControlelr.index),
    router.post('/menus', MenuControlelr.store)
})

module.exports = app
