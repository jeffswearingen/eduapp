var nodemailer = require('./nodemailer.service.js');
var db = require('./models');

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
		db.Userlogin.create({
			email    : req.body.emailAddress,
			password : req.body.password,
			name     : req.body.name

		});
		res.end();
	});

	app.post('/api/login', function(req, res) {
		console.log(req.body);
		db.Userlogin.findOne({
			where: {
				email    : req.body.emailAddress,
				password : req.body.password
			}
		}).then(function(data) {
			res.json(data);
			console.log('response ' + data);
		}).catch(function(err) {
			console.log(err);
		})

	});

	app.post('/api/checkin', function(req, res) {
		console.log(req.body);
		db.Attendance.create({
			name	: req.body.name,
			event	: req.body.meeting,
			date	: req.body.date
		});
		res.end();
	});


};