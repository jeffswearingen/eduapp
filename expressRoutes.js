var nodemailer = require('./nodemailer.service.js');


module.exports = function(app) {
	app.post('/api/email', function(req, res) {
		console.log(req);
	    // nodemailer(req.body.recipient, req.body.title, req.body.message, req.user[0].name);
	});

}