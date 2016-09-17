angular.module("app")
.service("mapService", function($http){
//basic information for use by .getBreweryByLoc
  var beerBaseUrl =  "https://api.brewerydb.com/v2/search/geo/point?lat=";
  var beerApiKey = "key=e6dd4ca543ecb9e65e170def16b95035"
  var beerPageCounter = 0;

//obtains local breweries and verifies the information prior to passing along to MapCtrl
  this.getBreweryByLoc = function(lat, long){
    var breweryArr = [];
    return $http({
        method: "GET"
      , url: beerBaseUrl + lat + "&lng=" + long + "&" + beerApiKey
    }).then(function(response){
      console.log(beerBaseUrl + lat + "&lng=" + long + "&" + beerApiKey)
      var responseArr = response.data.data;
      for (var i = 0; i < responseArr.length; i++){
        if(responseArr[i].status === "verified" && responseArr[i].openToPublic === "Y"){
            breweryArr.push(responseArr[i])
        }
      }
      return breweryArr;
    })
  };

})
