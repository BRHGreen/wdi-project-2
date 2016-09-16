module.exports = {
  port: process.env.PORT || 3000,
  db: 'mongodb://localhost/vegan-london',
  secret: process.env.SECRET || "this is secret. You have no idea what its purpose is"
};
