/* Userlogin is where passwords, emails, and user names are stored.
   this is joined with events by the attendance db. */

/*=================USERLOGIN TABLE MODEL===========*/

module.exports = function(sequelize, DataTypes) {
	// create a model of the table for sequelize
	var Userlogin = sequelize.define('Userlogin', {
		email: {
			type: DataTypes.STRING
		},

		name: {
			type: DataTypes.STRING
		},

		password: {
			type: DataTypes.STRING
		}
	}, {
		class_methods: {

		}
	}, {
		timestamps: false
	});
	return Userlogin;
};