const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const app = express();
const port = process.env.port || 3000

// Routes
const routeCategory = require('./routes/category')
const routeMenu = require('./routes/menu')
const routeOrder = require('./routes/order')
const routeTransaction = require('./routes/transaction')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use([routeCategory, routeMenu, routeOrder, routeTransaction]) //Router

app.listen(port, console.log(`Sedang berjalan di port ${port}`))
