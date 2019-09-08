const model = require('../models')
const Transaction = model.transaction

exports.index = async (req, res) => {
    await Transaction.findAll().then(transaction => {
        res.status(200).send({transaction})
    }).catch(err => {throw err})
}

exports.store = async (req, res) => {
    await Transaction.create(req.body).then(transaction => {
        res.status(200).send({
            transaction,
            message: 'success'
        })
    }).catch(err => {throw err})
}

exports.update = async (req, res) => {
    const id = req.params.id

    await Transaction.findOne({
        where: {
            id
        }
    }).then(transaction => {
        if (transaction) {
            transaction.update(req.body).then(data => {
                res.status(200).send(data)
            }).catch(err => {
                res.send(400).send({message: err})
            })
        }
    }).catch(err => {throw err})
}