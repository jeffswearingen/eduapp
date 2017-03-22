var nodemailer = require('./nodemailer.service.js');


module.exports = function(app) {
	app.all('/', function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		next();
	});

	app.post('/api/email', function(req, res) {
		console.log(req.body.name);
	    nodemailer('', '', req.body.messageBody, req.body.name);
	
		res.send(req.body);
		res.end();

	});

	app.post('/api/register', function(req, res) {
		console.log(req.body);
		res.end();
	});

};