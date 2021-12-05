const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');

exports.router = (function () {
    const apiRouter = express.Router();
    apiRouter.route('/createuser').post(usersCtrl.createUser);
    apiRouter.route('/users').get(usersCtrl.getAllUsers);
    apiRouter.route('/users/:id').get(usersCtrl.getUser);
    apiRouter.route('/updateuser').put(usersCtrl.updateUser);
    apiRouter.route('/deleteuser').delete(usersCtrl.deleteUser);

    return apiRouter;
})();