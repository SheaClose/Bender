angular.module("app", ['ui.router', 'uiGmapgoogle-maps'])
.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider){
  uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCIdWvV8D7BDxSAOzFP8A5lJUrVoENki30',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
  });
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("home", {
      url: "/"
    , templateUrl: "./views/home.html"
  })
  .state("mapView", {
      url: "/map"
    , templateUrl: "./views/map.html"
  })
  .state("browseBeers", {
      url: "/browseBeers"
    , templateUrl: "./views/browseBeers.html"
    , controller: "beerListCtrl"
  })
  .state("browseBreweries", {
      url: "/browseBreweries"
    , templateUrl: "./views/browseBreweries.html"
  })
  .state("browseBeerStyles", {
      url: "/browseBeerStyles"
    , templateUrl: "./views/browseBeerStyles.html"
  })
  .state("brewery", {
      url: "/brewery/:bId"
    , templateUrl: "views/brewery.html"
    , controller: "breweryHomeCtrl"
  })
})
