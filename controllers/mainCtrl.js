angular.module("app")
.controller("mainCtrl", function($scope, appService, uiGmapGoogleMapApi){
$scope.markers = [];
$scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
$scope.options = {scrollwheel: false};

// uiGmapGoogleMapApi.then(function(maps) {
//
//   if (navigator.geolocation) {
//     function error(err){
//       console.log(err.code);
//     }
//     function success(pos){
//       var userLat = pos.coords.latitude;
//       var userLng = pos.coords.longitude;
//       console.log(userLat, userLng)
//       // $scope.centerMap = baseUrl + userLat + "," + userLng + key;
//       $scope.map = { center: { latitude: userLat, longitude: userLng }, zoom: 8 };
//       console.log($scope.map)
//     }
//     navigator.geolocation.getCurrentPosition(success, error);
//   }
// });




})
