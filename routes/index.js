const router = require('express').Router();

// routes
router.use('/visualize', require('./census'));

module.exports = router;
