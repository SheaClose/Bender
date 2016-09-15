angular.module("app")
.controller("mainCtrl", function($scope, appService){
  $scope.beers = appService.beers;
  $scope.nextPage = function() {
    return appService.getBeers().then(function(response){
      $scope.beers = response;
      console.log(response)
    })
  }
})
