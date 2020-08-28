'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var music = require('../../app/controllers/music.server.controller');

	// Music Routes
	app.route('/music')
		.get(music.list)
		.post(users.requiresLogin, music.create);

	app.route('/music/create')
		.get(users.requiresLogin, music.list);

	app.route('/music/:musicId')
		.get(users.requiresLogin, music.read)
		.put(users.requiresLogin, music.hasAuthorization, music.update)
		.delete(users.requiresLogin, music.hasAuthorization, music.delete);

	// Finish by binding the Music middleware
	app.param('musicId', music.musicByID);
};
