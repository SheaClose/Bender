angular.module("app")
.controller("mapCtrl", function($scope, mapService){
  $scope.breweryId = [];
  $scope.allLatLng = [];
  $scope.allMarkers = [];
  $scope.breweryName = [];
  $scope.infoWindow = []
  $scope.pos;
  $scope.userCords;
  $scope.tempMarkerHolder = [];
  $scope.centerMap = "";
  var baseUrl = "https://www.google.com/maps/embed/v1/place?q=";
  var key =  "&key=AIzaSyCIdWvV8D7BDxSAOzFP8A5lJUrVoENki30";
$scope.test = "All clear"


  // if (navigator.geolocation) {
  //   function error(err){
  //     console.log(err.code);
  //   }
  //   function success(pos){
  //     var userLat = pos.coords.latitude;
  //     var userLng = pos.coords.longitude;
  //     console.log(userLat, userLng)
  //     // $scope.centerMap = baseUrl + userLat + "," + userLng + key;
  //     $scope.map = { center: { latitude: userLat, longitude: userLng }, zoom: 8 };
  //     console.log($scope.centerMap)
  //   }
  //   navigator.geolocation.getCurrentPosition(success, error);
  // }



})
