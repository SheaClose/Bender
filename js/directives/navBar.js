angular.module('app')
.directive("navBar", function(){
  return {
    templateUrl: "./views/navBar.html"
    , controller: function($scope, $state, mapService){
      // mapView <--- map name to go to..
      // geolocation <-- url paramaters
      $scope.searchByZipcode = function(zipCodeInput) {
        mapService.searchByZipcode(zipCodeInput).then(function(response){
          console.log(response)
          var location = {
            lat: response.lat
            , lng: response.lng
          }
          $state.go("mapView", {"lat": location.lat, "lng": location.lng})
        })
      }
    }
  }
})
