angular.module("app")
.service("breweryHomeService", function($http){
  var beerBaseUrl =  "https://api.brewerydb.com/v2/brewery/";
  var beerApiKey = "/beers?key=e6dd4ca543ecb9e65e170def16b95035"

  this.getBreweryInfo = function(id){
    return $http.get(beerBaseUrl + id + beerApiKey).then(function(response){
      var beerArr = response.data.data;

      var beerList = [];
      for (var i = 0; i < beerArr.length; i++){
        if (beerArr[i]["style"]){
          beerList.push(beerArr[i])
        }
      }
      console.log(beerList);
      return beerList;
    })
  }
})
