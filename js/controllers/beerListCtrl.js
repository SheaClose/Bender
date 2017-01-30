angular.module("app")
.controller("beerListCtrl", function($scope, beerServices, styleServices){
    $scope.beerList = true;
    $scope.getBeers = function (arg) {
      beerServices.getBeers(arg).then(function(response){
        $scope.beers = response;
      })
    }
    $scope.getStyles = function (arg) {
      styleServices.getStyles(arg).then(function(response){
        $scope.styles = response;
      })
    }
    $scope.searchByBeerName = function(input){
      beerServices.searchByBeerName(input).then(function(response){
        $scope.beers = response;
      })
    }
  $scope.getBeers();
  $scope.getStyles();
})
