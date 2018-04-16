var router = require('express').Router();
//var logger = require('../../util/logger');
var controller = require('./topicController');
var createBasicRoutes = require('../../utils/createBasicRoutes')
//var auth = require('../../auth/auth');

//var checkUser = [auth.decodeToken(), auth.getFreshUser()];
// setup boilerplate route just to satisfy a request
// for building

//Use createAuthRoutes when authorization is set up

createBasicRoutes(router, controller)

module.exports = router;
