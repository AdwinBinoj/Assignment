var App=angular.module("myapp",["ui.router"]);App.config(function(t,e){e.otherwise("/home"),t.state("home",{url:"/home",templateUrl:"partials/Home.html"}).state("Details",{url:"/Details",templateUrl:"partials/Details.html"})});