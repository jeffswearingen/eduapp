var nodemailer = require('./nodemailer.service.js');


module.exports = function(app) {
	app.post('/api/email', function(req, res) {
//		console.log(req.body.name);
	    nodemailer('', '', req.body.messageBody, req.body.name);
//		res.send(req.body);
		res.end();

	});

};