const router = require('express').Router();

const {
  countAndSort,
} = require('../controllers/census_learn_sql');

router.post('/', countAndSort);

module.exports = router;
