/**
 * VideosController
 *
 * @description :: Server-side logic for managing videos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

		'index': function(req, res){
				Videos.find().exec(function (err, videos){
				    if (err) return res.serverError(err);
						// res.json(videos);
				 		res.view('videos/index',{
								allVideos: videos
						});
				});
		 },

		'new': function(req, res){
				res.view();
		 },

		'create': function(req, res){
				for(var x=0; x < 20; x++){
						Videos.create({title: "A Thousand Years", artist: "Christina Peri", description:"playitonpiano original tutorial on how to play a thousand years by Christina Peri.", genre: "Acoustic", thumbNail: "http://img.youtube.com/vi/Y7Sg5W3XlXU/0.jpg", videoUrl:"https://www.youtube.com/embed/Y7Sg5W3XlXU?controls=0&amp;showinfo=0"}, function(err,sheet){})
				}
				Videos.create(req.params.all(), function(err, video){
								res.redirect('/videos/show/'+video.id);
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

								res.redirect('/videos/show/'+req.param('id'));
					});
				},


		show: function(req, res){
					Videos.findOne(req.param('id'), function(err, video){
									res.view({
										  displayVideo: video
									})
					});
				},

		destroy: function(req, res){
						Videos.findOne(req.param('id'), function(err, video){
										video.destroy();
										res.redirect('/videos');
						});
					}
};
