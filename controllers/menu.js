const model = require('../models')
const Menu = model.menu

exports.index = async (req, res) => {
    await Menu.findAll().then(menu => {
        res.status(200).json({
            data: menu
        })
    }).catch(err => {throw err})
}

exports.store = async (req, res) => {
    await Menu.create(req.body).then(menu => {
        res.status(200).send(menu)
    }).catch(err => {throw err})
}