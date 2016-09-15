angular.module("app")
.service("appService", function($http){
  var baseUrl = "http://api.brewerydb.com/v2/";
  var apiKey = "key=e6dd4ca543ecb9e65e170def16b95035"
  var counter = 1;
  this.getBeers = function(){
    return $http({
        method: "GET"
      , url: baseUrl + "beers/?p=" + counter + "&" + apiKey
    }).then(function(response){
      counter++
      console.log(response.data.data);
      this.beers = response.data.data;
      return response;
    })
  }();

})
