angular.module("app")
.controller("mapCtrl", function($scope, mapService){

$scope.mapRefresh=false;
$scope.map = {
    center: {latitude: 0, longitude: 0 }
  , zoom: 7 };

  $scope.markerList=[{
    coords: {
    latitude: 33.782182,
    longitude: -96.797557,
    message: "This is a test Message!"
  }
  , id: 2
  },{
    coords: {
    latitude: 34.782182,
    longitude: -96.797557,
    message: "This is a test Message!"
  }
  , id: 3
  },{
    coords: {
    latitude: 35.782182,
    longitude: -96.797557,
    message: "This is a test Message!"
  }
  , id: 4
  }]

  if (navigator.geolocation) {
    function error(err){
    }
    function success(pos){
      var userLat = pos.coords.latitude;
      var userLng = pos.coords.longitude;
      $scope.map = { center: { latitude: userLat, longitude: userLng }, zoom: 15 };
      $scope.homeMarker = {
        coords: {
          latitude: userLat,
          longitude: userLng,
        }
        ,id: 99
      }
    }
    navigator.geolocation.getCurrentPosition(success, error)
  }




})
