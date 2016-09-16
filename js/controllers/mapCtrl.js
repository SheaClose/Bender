angular.module("app")
.controller("mapCtrl", function($scope, mapService){
  //prevents map from showing up until information is obtained.
  $scope.mapRefresh = false;

  $scope.markerList=[{
    coords: {
    latitude: 33.782182,
    longitude: -96.797557
  }
  , id: 2
  , message: "This is a test Message!"
  },{
    coords: {
    latitude: 34.782182,
    longitude: -96.797557
  }
  , id: 3
  , message: "This is a test Message!"
  },{
    coords: {
    latitude: 35.782182,
    longitude: -96.797557
  }
  , id: 4
  , message: "This is a test Message!"
  }]
  $scope.refresh = function(){
    $scope.mapRefresh = !$scope.mapRefresh
    console.log($scope.mapRefresh)
  };
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
      $scope.getBreweryByLoc(userLat, userLng);
    }
    navigator.geolocation.getCurrentPosition(success, error)
  }
///testing starts here!!!!
  $scope.getBreweryByLoc = function (lat, long) {
    mapService.getBreweryByLoc(lat, long).then(function(response){
      $scope.localbreweries = response;
      console.log(response)
      $scope.refresh()
    })
  }

})
