angular.module("app")
.service("breweryHomeService", function($http){
  var baseUrl = "https://api.brewerydb.com/v2/"
  var beerBaseUrl =  "https://api.brewerydb.com/v2/brewery/";
  var beerApiKey = "key=e6dd4ca543ecb9e65e170def16b95035"
  var beersUrl = "/beers?";

  this.getBreweryInfo = function(id){
    return $http.get(beerBaseUrl + id + beersUrl + beerApiKey).then(function(response){
      if (response.data.data){
      var beerArr = response.data.data;
      var beerList = [];
      for (var i = 0; i < beerArr.length; i++){
        if (beerArr[i]["style"]){
          beerList.push(beerArr[i])
        }
      }
      return beerList;
    }
      // console.log(beerList);
      alert("No information provided from Brewery")
      return "error";
    })
  }
  this.getBrewery = function(id){
    return $http.get(beerBaseUrl + id + "?" + beerApiKey).then(function(response){
      // console.log(response.data.data)
      return response.data.data;
    })
  }
  this.selectABeer = function(beerId){
    return $http.get(baseUrl + "beer/" + beerId + "?" + beerApiKey).then(function(response){
      return response;
    })
  }
})
