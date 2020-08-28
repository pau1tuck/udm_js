'use strict';

// Music controller
angular.module('music').controller('MusicController', ['$scope', '$stateParams', '$location', '$sce', 'Authentication', 'Music',
	function($scope, $stateParams, $location, $sce, Authentication, Music) {
		$scope.authentication = Authentication;

		// Create new Music
		$scope.create = function() {
			// Create new Music object
			var music = new Music ({
				title: this.title,
				version: this.version,
				artist: this.artist,
				label: this.label,
				month: this.month,
				year: this.year,
				tags: this.tags,
				host: this.host,
				url: this.url,
				image: this.image,
				status: this.status,
				review: this.review
			});

			// Redirect after save
			music.$save(function(response) {
				$location.path('music/' + response._id);

				// Clear form fields
				$scope.title = '';
				$scope.version = '';
				$scope.artist = '';
				$scope.label = '';
				$scope.month = '';
				$scope.year = '';
				$scope.tags = '';
				$scope.host = '';
				$scope.url = '';
				$scope.image = '';
				$scope.status = '';
				$scope.review = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Music
		$scope.remove = function(music) {
			if ( music ) { 
				music.$remove();

				for (var i in $scope.music) {
					if ($scope.music [i] === music) {
						$scope.music.splice(i, 1);
					}
				}
			} else {
				$scope.music.$remove(function() {
					$location.path('music');
				});
			}
		};

		// Update existing Music
		$scope.update = function() {
			var music = $scope.music;

			music.$update(function() {
				$location.path('music/' + music._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Music
		$scope.find = function() {
			$scope.currentPage = 0;
	      	$scope.pageSize = 8;
			$scope.music = Music.query();
			console.log('Anus: ' + $scope.music.length);
			$scope.andOutput = '&output=embed';
	      	$scope.numberOfPages=function(){
	          return Math.ceil($scope.music.length/$scope.pageSize);                
	     	};
		};

		// Find existing Music
		$scope.findOne = function() {
			$scope.music = Music.get({ 
				musicId: $stateParams.musicId
			});
		};

		

		/*

		data-ng-if="!track.status.length"


		//pagination
	 	$scope.viewby = 4;
	    $scope.totalItems = Music.length;
	    $scope.currentPage = 1;
	    $scope.itemsPerPage = $scope.viewby;
	    $scope.maxSize = 5; //Number of pager buttons to show

	    $scope.setPage = function (pageNo) {
	      $scope.currentPage = pageNo;
	    };

	    $scope.pageChanged = function() {
	     	 console.log('Page changed to: ' + $scope.currentPage);
	    };

		$scope.setItemsPerPage = function(num) {
		  	$scope.itemsPerPage = num;
		  	$scope.currentPage = 1; //reset to first page
		};
		*/
}]);