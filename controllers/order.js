const model = require('../models')
const Order = model.order

exports.index = async (req, res) => {
    await Order.findAll().then(order => {
        res.status(200).send(order)
    }).catch(err => { throw err })
}

exports.transaction = async (req, res) => {
    const { transactionId } = req.params
    await Order.findAll({ where: { transactionId } }).then(order => {
        res.status(200).send(order)
    }).catch(err => { throw err })
}

exports.store = async (req, res) => {
    await Order.create(req.body).then(order => {
        res.status(200).send(order)
    }).catch(err => { throw err })
}

exports.update = async (req, res) => {
    const { menuId, transactionId } = req.params

    await Order.findOne(
        {
            where: {
                menuId,
                transactionId
            }
        }
    ).then(order => {
        if (order) {
            order.update(req.body).then(data => {
                res.status(200).send(data)
            }).catch(err => {
                res.send(err)
            })
        }
    }).catch(err => { throw err })
}