const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  lat: { type: String, trim: true },
  lng: { type: String, trim: true },
  image: { type: String, trim: true },
  url: { type: String, trim: true }

}, {
  timestamps: true
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
