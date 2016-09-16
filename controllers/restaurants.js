const Restaurant = require('../models/restaurant');

function restaurantsIndex(req, res) {
  Restaurant.find({}, (err, restaurants) => {
    if (err) return res.status(500).json({ message: "Something's gone wrong"});
    return res.status(200).json({ restaurants });
  });
}

module.exports = {
  index: restaurantsIndex
};
