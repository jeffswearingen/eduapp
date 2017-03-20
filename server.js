

// require npm packages
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// setup express server
var app = express();
var PORT = process.env.PORT || 8000;

// serve the static css file from the public directory
app.use(express.static(process.cwd() + "/public"));

// // Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
//var exphbs = require("express-handlebars");


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
// set default handlebars layout to main
//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

// include routes
var routes = require('./expressRoutes.js');

// use routes
app.use('/', routes);

// initialize server on port
app.listen(PORT, function() {
	console.log("Listening on PORT " + PORT);
});
