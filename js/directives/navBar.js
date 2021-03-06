angular.module('app')
.directive("navBar", function(){
  return {
    templateUrl: "./views/navBar.html"
    , controller: function($scope, $state, mapService){
      $scope.searchByZipcode = function(zipCodeInput) {
        if (zipCodeInput.length !== 5){
          alert("Please input valid Zip Code.")
        }
        else {
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
  }
})
