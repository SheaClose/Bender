angular.module('app')
.controller("breweryHomeCtrl", function($scope, $state, mapService, breweryHomeService){

  function getBreweryInfo(arg){
    breweryHomeService.getBreweryInfo(arg).then(function(response){
      $scope.beerList = response;
    })
  }
  var getBrewery = function(id){
    breweryHomeService.getBrewery(id).then(function(response){
    if (response !== "error") {
      $scope.brewery = response;
      if (response.images.squareLarge){
        $scope.breweryImg = response.images.squareLarge;
      }
      else {$scope.breweryImg = ""}
    }
    else {$state.go("map")}
    })
}
  $scope.selectABeer = function(beerId){
    breweryHomeService.selectABeer(beerId).then(function(response){
      $scope.selectedBeer = response.data.data;
      $scope.beerInfo = true;
      $scope.breweryImg = false;
      console.log($scope.selectedBeer);
    })
  }

  getBreweryInfo($state.params.bId);
  getBrewery($state.params.bId);
})
