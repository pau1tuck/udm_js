'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Music = mongoose.model('Music'),
	_ = require('lodash');

/**
 * Add a track
 */
exports.create = function(req, res) {
	var music = new Music(req.body);
	music.user = req.user;

	music.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(music);
		}
	});
};

/**
 * View a track
 */
exports.read = function(req, res) {
	res.jsonp(req.music);
};

/**
 * Modify a track
 */
exports.update = function(req, res) {
	var music = req.music ;

	music = _.extend(music , req.body);

	music.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(music);
		}
	});
};

/**
 * Delete a track
 */
exports.delete = function(req, res) {
	var music = req.music ;

	music.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(music);
		}
	});
};

/**
 * List all music
 */
exports.list = function(req, res) { 
	Music.find().sort('-created').populate('user', 'displayName').exec(function(err, music) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(music);
		}
	});
};

/**
 * Music middleware
 */
exports.musicByID = function(req, res, next, id) { 
	Music.findById(id).populate('user', 'displayName').exec(function(err, music) {
		if (err) return next(err);
		if (! music) return next(new Error('Failed to load track ' + id));
		req.music = music ;
		next();
	});
};

/**
 * Music authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.music.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
