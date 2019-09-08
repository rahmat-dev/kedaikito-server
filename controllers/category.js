const model = require('../models')
const Category = model.category

exports.index = async (req, res) => {
    await Category.findAll().then(category => {
        res.status(200).send(category)
    }).catch(err => { throw err })
}

exports.store = async (req, res) => {
    await Category.create(req.body).then(category => {
        res.send(category)
    }).catch(err => { throw err })
}