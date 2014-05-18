/**
 * Created by benjamin on 10/05/2014.
 */
var express = require('express');
var path = require('path');
var logger = require('morgan');
var routes = require('./core/server/routePage');
//var restRoutes = require('./server/ressources/rest/restRoutes');

var app = express();

//      _____             __ _                       _   _
//     / ____|           / _(_)                     | | (_)
//    | |     ___  _ __ | |_ _  __ _ _   _ _ __ __ _| |_ _  ___  _ __
//    | |    / _ \| '_ \|  _| |/ _` | | | | '__/ _` | __| |/ _ \| '_ \
//    | |___| (_) | | | | | | | (_| | |_| | | | (_| | |_| | (_) | | | |
//     \_____\___/|_| |_|_| |_|\__, |\__,_|_|  \__,_|\__|_|\___/|_| |_|
//                              __/ |
//                             |___/

// view engine setup
app.set('views', path.join(__dirname, '.'));

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use("/client",express.static(path.join(__dirname, 'client')));
app.use("/modules",express.static(path.join(__dirname, 'modules')));
app.use("/pages",express.static(path.join(__dirname, 'pages')));
//     _____             _       ______ _ _
//    |  __ \           | |     |  ____(_) |
//    | |__) |___  _   _| |_ ___| |__   _| | ___
//    |  _  // _ \| | | | __/ _ \  __| | | |/ _ \
//    | | \ \ (_) | |_| | ||  __/ |    | | |  __/
//    |_|  \_\___/ \__,_|\__\___|_|    |_|_|\___|



app.use('/', routes);
//app.use('/ressources', restRoutes);


//      ______
//    |  ____|
//    | |__   _ __ _ __ ___  _ __
//    |  __| | '__| '__/ _ \| '__|
//    | |____| |  | | | (_) | |
//    |______|_|  |_|  \___/|_|


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('./pages/error/error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('./pages/error/error', {
        message: err.message,
        error: {}
    });
});



//     ______                       _
//    |  ____|                     | |
//    | |__  __  ___ __   ___  _ __| |_ ___
//    |  __| \ \/ / '_ \ / _ \| '__| __/ __|
//    | |____ >  <| |_) | (_) | |  | |_\__ \
//    |______/_/\_\ .__/ \___/|_|   \__|___/
//                | |
//                |_|
module.exports = app;