var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var apiRoutes = express.Router(); 
var app = express();

// The only required route is for the calls to the mongopop API
var kid = require('./controllers/kid');
var health = require('./controllers/health');

// View engine setup
app.set('view engine', 'jade');

// Indicate the middleware that Express should use
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define and configure a rout middleware
apiRoutes.use(function(req, res, next) {
  if (req.headers['x-access-token']) {
    next();
  } else {
    return res
      .status(403)
      .json({success: false, message: 'Failed to authenticate token.'});
  }
});

// Define a single route; to be used to provide the Mongopop Restfull
// API
app.use('/', apiRoutes);
app.use('/kid', kid);
app.use('/health', health);

// For any other routes, set the status to 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;