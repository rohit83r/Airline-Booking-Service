const express = require('express');

const UserController = require("../../controllers/user-controller");

const router = express.Router();

const { AuthRequestValidators } = require('../../middlewares/index');

router.post(
    '/signup',
    AuthRequestValidators.validateUserAuth,
    UserController.create
);


router.post(
    '/signin',
    AuthRequestValidators.validateUserAuth,
    UserController.signIn
);

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
);

router.get(
    '/isAdmin',
    AuthRequestValidators.validateIsAdminRequest,
    UserController.isAdmin
);




module.exports = router;