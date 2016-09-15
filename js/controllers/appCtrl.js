angular.module("app", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
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
  })
  .state("browseBreweries", {
      url: "/browseBreweries"
    , templateUrl: "./views/browseBreweries.html"
  })
  .state("browseBeerStyles", {
      url: "/browseBeerStyles"
    , templateUrl: "./views/browseBeerStyles.html"
  })
})
