const express     = require('express');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const cors        = require('cors');
const bodyParser  = require('body-parser');

const app = express();
const routes      = require('./config/routes');

const port     = process.env.PORT || 3000;


app.use(morgan ('dev'));
app.use(cors());
app.use(express.static(`${__dirname}/public`));
app.use('/', routes);


app.listen(port, () => {
  console.log(`running on port ${port}`);
});
