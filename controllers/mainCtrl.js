angular.module("app")
.controller("mainCtrl", function($scope, appService){

  // $scope.nextPage = function () {
  //   appService.nextPage().then(function(response){
  //     $scope.beers = response;
  //     // console.log(response)
  //   })
  // }
  $scope.getBeers = function () {
    appService.getBeers().then(function(response){
      $scope.beers = response;
      // console.log(response)
    })
  }
  function toggle(arg){
    if (arg){
      return true;
    }
    return false;
  }



$scope.getBeers();


})
