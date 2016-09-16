angular.module("app")
.controller("mapCtrl", function($scope, mapService){
  //prevents map from showing up until information is obtained.
  $scope.mapRefresh = false;
  //array to store marker information in.
  $scope.markerList=[];
  //turns on map when all data has been collected
  $scope.refresh = function(){
    $scope.mapRefresh = !$scope.mapRefresh
  };
  //obtains geolocation of the user, immediately populates map with local breweries.
  if (navigator.geolocation) {
    function error(err){
      alert("Please input Zipcode to locate local breweries.")
    }
    function success(pos){
      var userLat = pos.coords.latitude;
      var userLng = pos.coords.longitude;
      $scope.map = { center: { latitude: userLat, longitude: userLng }, zoom: 12 };
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
///
  $scope.getBreweryByLoc = function (lat, long) {
    mapService.getBreweryByLoc(lat, long).then(function(response){
      $scope.localbreweries = response;
      console.log(response)
      var breweryObj = {};
      for (var i = 0; i < response.length; i++){
        breweryObj = {
          coords: {
              latitude: response[i].latitude
            , longitude: response[i].longitude
          }
          , id: i
          , message: response[i].brewery.name
        }
        $scope.markerList.push(breweryObj);
        console.log(breweryObj)
        breweryObj = {};
      }
      $scope.refresh()
    })
  }
  // $scope.markerList=[{
  //   coords: {
  //   latitude: 33.782182,
  //   longitude: -96.797557
  // }
  // , id: 2
  // , message: "This is a test Message!"
  // }
})
