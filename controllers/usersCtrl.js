const models = require('../models');

module.exports = {
    getAllUsers: function (req, res) {
        models.User.findAll(
        ).then(function (user) {
            res.status(200).json(user)
        })
    },
    getUser: function (req, res) {
        models.User.findByPk(req.params.id
        ).then(function (user) {
            res.status(200).json(user)
        })
    },
    updateUser: function (req, res) {
        models.User.update({ firstname: req.body.firstname, lastname: req.body.lastname }, {
            where: { id: req.body.id }
        }
        ).then(function (user) {
            res.status(200).json(user)
        })
    },
    deleteUser: function (req, res) {
        models.User.destroy({
            where: { id: req.body.id }
        }
        ).then(function (user) {
            res.status(200).json(user)
        })
    },
    createUser: function (req, res) {
        models.User.create({ firstname: req.body.firstname, lastname: req.body.lastname }
        ).then(function (user) {
            res.status(201).json(user)
        })
    }
};