/*
angular.module('music').controller('PaginationDemoCtrl', ['$scope', function($scope) {
    $scope.data = {};
    $scope.viewby = 4;
    $scope.totalItems = $scope.data.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 4;
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
  }

}]);
*//*
angular.module('music').controller('PaginationCtrl', ['$scope', function($scope){

      $scope.currentPage = 0;
      $scope.pageSize = 10;
      $scope.data = [];
      $scope.numberOfPages=function(){
          return Math.ceil($scope.data.length/$scope.pageSize);                
      }
      for (var i=0; i<45; i++) {
          $scope.data.push("Item "+i);
      }
}])

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
*/