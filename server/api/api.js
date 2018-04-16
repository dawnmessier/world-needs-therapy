var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/users', require('./user/userRoutes'));
router.use('/topics', require('./topic/topicRoutes'));
router.use('/posts', require('./post/postRoutes'));

module.exports = router;
