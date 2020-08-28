'use strict';

//Setting up route
angular.module('music').config(['$stateProvider',
	function($stateProvider) {
		// Music state routing
		$stateProvider.
		state('listMusic', {
			url: '/music',
			templateUrl: 'modules/music/views/list-music.client.view.html'
		}).
		state('createMusic', {
			url: '/music/create',
			templateUrl: 'modules/music/views/create-music.client.view.html'
		}).
		state('viewMusic', {
			url: '/music/:musicId',
			templateUrl: 'modules/music/views/view-music.client.view.html'
		}).
		state('editMusic', {
			url: '/music/:musicId/edit',
			templateUrl: 'modules/music/views/edit-music.client.view.html'
		}).


// Archive routes
		//January 2016 (temp route)
		state('january2016', {
			url: '/archive/201601',
			templateUrl: 'modules/music/views/archive/201601.html'
		}).
		//December 2015 (temp route)
		state('december2015', {
			url: '/archive/201512',
			templateUrl: 'modules/music/views/archive/201512.html'
		}).

		//November 2015 (temp route)
		state('november2015', {
			url: '/archive/201511',
			templateUrl: 'modules/music/views/archive/201511.html'
		}).

		//October 2015 (temp route)
		state('october2015', {
			url: '/archive/201510',
			templateUrl: 'modules/music/views/archive/201510.html'
		}).

		//September 2015 (temp route)
		state('september2015', {
			url: '/archive/201509',
			templateUrl: 'modules/music/views/archive/201509.html'
		}).

		//August 2015 (temp route)
		state('august2015', {
			url: '/archive/201508',
			templateUrl: 'modules/music/views/archive/201508.html'
		}).

		//July 2015 (temp route)
		state('july2015', {
			url: '/archive/201507',
			templateUrl: 'modules/music/views/archive/201507.html'
		});
	}
]);