angular.module('app')
.controller("breweryHomeCtrl", function($scope, $state, mapService, breweryHomeService){
  // console.log($state.params.bId)

  function getBreweryInfo(arg){
    breweryHomeService.getBreweryInfo(arg).then(function(response){
      // console.log(response)
      $scope.beerList = response;
    })
  }
  var getBrewery = function(id){
    breweryHomeService.getBrewery(id).then(function(response){
      $scope.brewery = response;
      $scope.breweryInfo = response.images.squareLarge;
    })
}

  getBreweryInfo($state.params.bId);
  getBrewery($state.params.bId);
})
