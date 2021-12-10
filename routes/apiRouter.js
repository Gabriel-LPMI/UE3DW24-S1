const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');

const multer = require('multer')
const upload = multer() // for parsing multipart/form-data

exports.router = (function () {
    const apiRouter = express.Router();
    apiRouter.route('/createuser').post(upload.array(), usersCtrl.createUser);
    apiRouter.route('/users').get(usersCtrl.getAllUsers);
    apiRouter.route('/users/:id').get(usersCtrl.getUser);
    apiRouter.route('/updateuser').put(upload.array(), usersCtrl.updateUser);
    apiRouter.route('/deleteuser/:id').delete(usersCtrl.deleteUser);

    return apiRouter;
})();