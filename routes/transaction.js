const express = require('express');
require('express-group-routes')

const TransactionControlelr = require('../controllers/transaction')

const app = express();

app.group('/api', router => {
    router.get('/transactions', TransactionControlelr.index),
    router.post('/transactions', TransactionControlelr.store),
    router.patch('/transactions/:id', TransactionControlelr.update)
})

module.exports = app
