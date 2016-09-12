const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
