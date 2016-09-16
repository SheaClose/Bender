angular.module("app")
.controller("mapCtrl", function($scope, mapService){

$scope.map = {
    center: {latitude: 0, longitude: 0 }
  , zoom: 1 };
  $scope.marker = {
    coords: {
      latitude: 30,
      longitude: -73,
    }
  }
  // $scope.markerList=[{
  //   coords: {
  //     latitude: 10,
  //     longitude: -73,
  //   }
  // },{
  //   coords: {
  //     latitude: 31,
  //     longitude: -73,
  //   }
  // },{
  //   coords: {
  //     latitude: 45,
  //     longitude: -73,
  //   }
  // }]

  if (navigator.geolocation) {
    function error(err){
    }
    function success(pos){
      var userLat = pos.coords.latitude;
      var userLng = pos.coords.longitude;
      $scope.map = { center: { latitude: userLat, longitude: userLng }, zoom: 15 };
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }




})
