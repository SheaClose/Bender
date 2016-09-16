angular.module("app")
.service("mapService", function($http){
//basic information for use by .getBreweryByLoc
  var beerBaseUrl =  "http://api.brewerydb.com/v2/search/geo/point?lat=";
  var beerApiKey = "key=e6dd4ca543ecb9e65e170def16b95035"
  var beerPageCounter = 0;

//obtains local breweries and verifies the information prior to passing along to MapCtrl
  this.getBreweryByLoc = function(lat, long){
    var breweryArr = [];
    return $http({
        method: "GET"
      , url: beerBaseUrl + lat + "&lng=" + long + "&" + beerApiKey
    }).then(function(response){
      var responseArr = response.data.data;
      for (var i = 0; i < responseArr.length; i++){
        console.log(responseArr[i]);
        if(responseArr[i].status = "verified"){
            breweryArr.push(responseArr[i])
        }
      }
      return breweryArr;
    })
  };

})
