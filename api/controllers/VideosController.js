/**
 * VideosController
 *
 * @description :: Server-side logic for managing videos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

		index: function(req, res){
				Videos.find().exec(function (err, videos){
				    if (err) return res.serverError(err);
				 		res.view('videos/index',{
								allVideos: videos
						});
				});
		 },

		new: function(req, res){
				res.view();
		 },

		create: function(req, res){
				Videos.create(req.params.all(), function(err, video){
								res.redirect('/admin/videos');
				});
			},

		edit: function(req, res){
					Videos.findOne(req.param('id'), function(err, video){
									res.view({
										  displayVideo: video
									})
					});
				},

		update: function(req, res){
				Videos.update(req.param('id'), req.params.all(), function(err, video){

								res.redirect('/admin/videos');
					});
				},


		// show: function(req, res){
		// 			Videos.findOne(req.param('id'), function(err, video){
		// 							res.view({
		// 								  displayVideo: video
		// 							})
		// 			});
		// 		},

		destroy: function(req, res){
						Videos.findOne(req.param('id'), function(err, video){
										video.destroy();
										res.redirect('/admin/videos');
						});
					}
};
