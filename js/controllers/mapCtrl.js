angular.module("app")
.controller("mapCtrl", function($scope, $state, $stateParams, mapService){
  //prevents map from showing up until information is obtained.
  $scope.mapRefresh = false;
  //array to store marker information in.
  $scope.markerList=[];
  //turns on map when all data has been collected
  $scope.refresh = function(){
    $scope.mapRefresh = !$scope.mapRefresh
  };
  //obtains geolocation of the user in order to populate map with local breweries.
  $scope.launch = function() {
    function error(err){
      alert("Please input Zipcode to locate local breweries.")
    }
    function success(pos){
      var userLat = "";
      var userLng = "";
      if ($stateParams.lat === ""){
      userLat = pos.coords.latitude;
      userLng = pos.coords.longitude;
    }
    else {
      userLat = $stateParams.lat;
      userLng = $stateParams.lng;
    }
      $scope.map = { center: { latitude: userLat, longitude: userLng }, zoom: 15 };
      $scope.homeMarker = {
        coords: {
          latitude: userLat,
          longitude: userLng,
        }
        , id: 99
        , options: {opacity: .5}
      }
      $scope.getBreweryByLoc(userLat, userLng);
    }
    navigator.geolocation.getCurrentPosition(success, error)
  }
//http request for breweries based on geolaction info.
  $scope.getBreweryByLoc = function (lat, long) {
    mapService.getBreweryByLoc(lat, long).then(function(response){
      $scope.localbreweries = response;
      var breweryObj = {};
      for (var i = 0; i < response.length; i++){
        breweryObj = {
          coords: {
              latitude: response[i].latitude
            , longitude: response[i].longitude
          }
          , id: i
          , message: "Brewery Name: " + response[i].brewery.name + " | Distance: " + response[i].distance
          , distance: response[i].distance
          , name: response[i].brewery.name
          , bId: response[i].breweryId
        }
        $scope.markerList.push(breweryObj);
        breweryObj = {};
      }
      $scope.refresh()
    })
  }
// changes page to brewery passing in brewery id
  $scope.goToBreweryPage = function(arg){
    $state.go("brewery", {bId: arg})
  }
$scope.launch();
})
