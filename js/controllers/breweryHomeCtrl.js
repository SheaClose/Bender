angular.module('app')
.controller("breweryHomeCtrl", function($scope, $state, mapService, breweryHomeService){
  console.log($state.params.bId)

  function getBreweryInfo(arg){
    breweryHomeService.getBreweryInfo(arg).then(function(response){
      console.log(response)
      $scope.beerList = response;
    })
  }

  getBreweryInfo($state.params.bId);
})
