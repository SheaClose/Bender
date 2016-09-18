angular.module("app")
.service("styleServices", function($http){
  var baseUrl = "https://crossorigin.me/https://api.brewerydb.com/v2/";
  var apiKey = "key=e6dd4ca543ecb9e65e170def16b95035"
  var counter = 0;

  this.getStyles = function(arg){
    if (arg === "previousPage") {
    counter--
  }
    else {
      counter++
    }
    return $http({
        method: "GET"
      , url: baseUrl + "styles/?" + apiKey
    }).then(function(response){
      return response.data.data;
    })
  };

})
