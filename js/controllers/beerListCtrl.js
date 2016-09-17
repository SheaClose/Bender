angular.module("app")
.controller("beerListCtrl", function($scope, appService, beerServices, styleServices){
    $scope.getBeers = function (arg) {
      beerServices.getBeers(arg).then(function(response){
        $scope.beers = response;
        console.log(response)
      })
    }

    $scope.getStyles = function (arg) {
      styleServices.getStyles(arg).then(function(response){
        $scope.styles = response;
        console.log(response)
      })
    }


  $scope.getBeers();
  $scope.getStyles();
})
