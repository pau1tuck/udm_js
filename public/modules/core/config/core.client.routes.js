'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		}).

		// Search page
		state('searchMusic', {
			url: '/search',
			templateUrl: 'modules/music/views/search-music.client.view.html'
		}).
		
		state('contact', {
			url: '/contact',
			templateUrl: 'modules/core/views/contact-form.client.view.html'
		});
	}
]);