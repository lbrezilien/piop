/**
 * SheetsController
 *
 * @description :: Server-side logic for managing sheets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {

 		index: function(req, res){
 				Sheets.find().exec(function (err, sheets){
 				    if (err) return res.serverError(err);
 						// res.json(sheets);
 				 		res.view('sheets/index',{
 								sheets: sheets
 						});
 				});
 		 },

 		new: function(req, res){
 				res.view();
 		 },

 		create: function(req, res){
 				Sheets.create(req.params.all(), function(err, sheet){
 								res.redirect('/sheets/show/'+sheet.id);
 				});
 			},

 		edit: function(req, res){
 					Sheets.findOne(req.param('id'), function(err, sheet){
 									res.view({
 										  sheet: sheet
 									})
 					});
 				},

 		update: function(req, res){
 				Sheets.update(req.param('id'), req.params.all(), function(err, sheet){

 								res.redirect('/sheets/show/'+req.param('id'));
 					});
 				},


 		show: function(req, res){
 					Sheets.findOne(req.param('id'), function(err, sheet){
 									res.view({
 										  sheet: sheet
 									})
 					});
 				},

 		destroy: function(req, res){
 						Sheets.findOne(req.param('id'), function(err, sheet){
 										sheet.destroy();
 										res.redirect('/sheets');
 						});
 					}
 };
