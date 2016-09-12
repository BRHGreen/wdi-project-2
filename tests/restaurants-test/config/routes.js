const express = require('express');
const router  = express.Router();

const staticsController = require('../controllers/statics');
const restaurantsController =
require('../controllers/restaurants');

router.route('/')
  .get(staticsController.home);

  router.route('/restaurants')
  .get(restaurantsController.index);

module.exports = router;
