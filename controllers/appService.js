angular.module("app")
.service("appService", function($http){
  var baseUrl = "https://api.brewerydb.com/v2/";
  var apiKey = "key=e6dd4ca543ecb9e65e170def16b95035"
  var counter = 0;

  this.getBeers = function(){
    counter++
    return $http({
        method: "GET"
      , url: baseUrl + "beers/?p=" + counter + "&" + apiKey
    }).then(function(response){
      return response.data.data;
    })
  };

  // this.nextPage = function(){
  //   counter++
  //   return $http({
  //       method: "GET"
  //     , url: baseUrl + "beers/?p=" + counter + "&" + apiKey
  //   }).then(function(response){
  //     return response.data.data;
  //   })
  // }

});
