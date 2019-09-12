const express = require('express');
require('express-group-routes')

const OrderControlelr = require('../controllers/order')

const app = express();

app.group('/api', router => {
    router.get('/orders', OrderControlelr.index),
    router.get('/orders/:transactionId', OrderControlelr.transaction),
    router.post('/orders', OrderControlelr.store),
    router.patch('/orders/:transactionId/:menuId', OrderControlelr.update)
})

module.exports = app
