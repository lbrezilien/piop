/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		index: function(req, res){
				res.view();
		},

		videos: function(req, res){
      Videos.find().exec(function(err, videos){
				if (err) return res.serverError(err);

				res.view('admin/videos/index', {
					videos: videos
				});
			});
		},

		sheets: function(req, res){
			Sheets.find().exec(function(err, sheets){
				if (err) return res.serverError(err);

				res.view('admin/sheets/index', {
					sheets: sheets
				});
			});
		}

};
