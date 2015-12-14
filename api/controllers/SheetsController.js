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
 				 		res.view({
 								sheets: sheets
 						});
 				});
 		 },

 		new: function(req, res){
 				res.view();
 		 },

 		create: function(req, res){
				// for(var x=0; x < 20; x++){
				// 	Sheets.create(req.params.all(), function(err,sheet){})
				// }
 				Sheets.create(req.params.all(), function(err, sheet){
 								res.redirect('admin/sheets/');
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

 								res.redirect('admin/sheets');
 					});
 				},


 		destroy: function(req, res){
 						Sheets.findOne(req.param('id'), function(err, sheet){
 										sheet.destroy();
 										res.redirect('admin/sheets');
 						});
 					}
 };
