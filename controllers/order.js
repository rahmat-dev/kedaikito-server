const model = require('../models')
const Order = model.order

exports.index = async (req, res) => {
    await Order.findAll().then(order => {
        res.status(200).send(order)
    }).catch(err => {throw err})
}

exports.transaction = async (req, res) => {
    const { transactionId } = req.params
    await Order.findAll({where: {transactionId}}).then(order => {
        res.status(200).send(order)
    }).catch(err => {throw err})
}

exports.store = async (req, res) => {
    await Order.create(req.body).then(order => {
        res.status(200).send(order)
    }).catch(err => {throw err})
}