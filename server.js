

// require npm packages
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// setup express server
var app = express();
var PORT = process.env.PORT || 8000;

// require database models for syncing
var db = require("./models");

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
require('./nodemailer.service.js');
// include routes
require('./expressRoutes.js')(app);

// use routes
//app.use('/', routes);

// synchronize sequelize models and then start express app
// use force:true after models have been altered or first running the app on a local machine
db.sequelize.sync({ force : true }).then(function() {
	// initialize server on port
	app.listen(PORT, function() {
		console.log("Listening on PORT " + PORT);
	});
});