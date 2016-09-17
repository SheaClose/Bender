angular.module("app")
.service("beerServices", function($http){
  var baseUrl = "https://api.brewerydb.com/v2/";
  var apiKey = "key=e6dd4ca543ecb9e65e170def16b95035"
  var counter = 0;

  this.getBeers = function(arg){
    if (arg === "previousPage") {
    counter--
  }
    else {
      counter++
    }
    return $http({
        method: "GET"
      , url: baseUrl + "beers/?p=" + counter + "&" + apiKey
    }).then(function(response){
      var responseArr = response.data.data
      var newResponse = [];
      var newObject = {};
    for (var i = 0; i < responseArr.length; i++){
      if (responseArr[i]["name"] && responseArr[i]["description"] && responseArr[i]["abv"] && responseArr[i]["srm"]){
        newObject = {
            name: responseArr[i]["name"]
          , description: responseArr[i]["description"]
          , shortDesc: responseArr[i]["description"].split("").splice(0, 250).join("")
          , abv: responseArr[i]["abv"]
          , hex: responseArr[i]["srm"]["hex"]
        }
        newResponse.push(newObject);
      }
      else if (responseArr[i]["name"] && responseArr[i]["description"] && responseArr[i]["abv"]){
        newObject = {
            name: responseArr[i]["name"]
          , description: responseArr[i]["description"]
          , shortDesc: responseArr[i]["description"].split("").splice(0, 250).join("")
          , abv: responseArr[i]["abv"]
          , hex: "E6BB09"
        }
        newResponse.push(newObject);
      }

      newObject = {};
    }
      return newResponse;
    })
  };
  this.searchByBeerName = function(input){
    return $http.get(baseUrl + "/search?q=" + input + "&type=beer" + "&" + apiKey).then(function(response){
      console.log(response)

      var responseArr = response.data.data
      var newResponse = [];
      var newObject = {};
    for (var i = 0; i < responseArr.length; i++){
      if (responseArr[i]["name"] && responseArr[i]["description"] && responseArr[i]["abv"] && responseArr[i]["srm"]){
        newObject = {
            name: responseArr[i]["name"]
          , description: responseArr[i]["description"]
          , shortDesc: responseArr[i]["description"].split("").splice(0, 250).join("")
          , abv: responseArr[i]["abv"]
          , hex: responseArr[i]["srm"]["hex"]
        }
        newResponse.push(newObject);
      }
      else if (responseArr[i]["name"] && responseArr[i]["description"] && responseArr[i]["abv"]){
        newObject = {
            name: responseArr[i]["name"]
          , description: responseArr[i]["description"]
          , shortDesc: responseArr[i]["description"].split("").splice(0, 250).join("")
          , abv: responseArr[i]["abv"]
          , hex: "E6BB09"
        }
        newResponse.push(newObject);
      }

      newObject = {};
    }
      return newResponse;
    })
  }
})
