/* Attendance is currently the temporary home of the data that will result from the 
   merge of userlogin and meetings.  This is present for a MVP */

/*=================ATTENDANCE TABLE MODEL===========*/

module.exports = function(sequelize, DataTypes) {
	// create a model of the table for sequelize
	var Attendance = sequelize.define('Attendance', {

		name: {
			type: DataTypes.STRING
		},

		event: {
			type: DataTypes.STRING
		},
		date: {
			type: DataTypes.DATE
		}
	}, {
		class_methods: {

		}
	}, {
		timestamps: false
	});
	return Attendance;
};