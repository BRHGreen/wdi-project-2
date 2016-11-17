module.exports = {
  port: process.env.PORT || 3000,
  // db: process.env.MONGODB_URI || 'mongodb://localhost/vegan-london',
  db: 'mongodb://benedictgreen:veganlondon@ds157247.mlab.com:57247/heroku_h1cc80mf',
  secret: process.env.SECRET || "this is secret. You have no idea what its purpose is"
};
