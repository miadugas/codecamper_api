const express = require('express');
const dotenv = require('dotenv');
//const logger = require('./middleware/logger');
const morgan = require('morgan');

//Route files
const bootcamps = require('./routes/bootcamps');

//Load env variables
dotenv.config({ path: './config/config.env' });

//initialze app variable in express
const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//custom logger but I want to use a more robust 3rd party logger in its place
//moved
// const logger = (req, res, next) => {
//   console.log(
//     `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
//   );
//   next();
// };

//app.use(logger);

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
