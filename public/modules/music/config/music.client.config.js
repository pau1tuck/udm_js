'use strict';

// Configuring the Articles module
angular.module('music').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Music', 'music', 'dropdown', '/music(/create)?');
		Menus.addSubMenuItem('topbar', 'music', 'List Music', 'music');
		Menus.addSubMenuItem('topbar', 'music', 'New Music', 'music/create');
	}
]);

angular.module('music')
	.filter('ResourceUrl', ['$sce', function($sce) {
	    return function(val) {
	        return $sce.trustAsResourceUrl(val);
	    };
}]);

angular.module('music')
	.filter('startFrom', function() {
	    return function(input, start) {
	        start = +start; //parse to int
	        return input.slice(start);
	    };
});

/*
angular.module('music')
	.filter ('removeTunes', function() {
		return function (trackStatus) {
			if (trackStatus == 'tune')	
		}
	var tuneCount = 0;
	do ()
	

	};

	});
*/