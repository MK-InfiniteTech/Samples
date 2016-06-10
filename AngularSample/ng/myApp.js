(function () {
    angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider){
        $routeProvider
        .when("/", { templateUrl: "ng/views/LandingPage.html", controller: "" })
        .when("/login", { templateUrl: "ng/views/login.html", controller: "" })
        .when("/Headlines", { templateUrl: "ng/views/headlines.html", controller: "", caseInsensitiveMatch: true })
        .when("/Settings", { templateUrl: "ng/views/settings.html", controller: "", caseInsensitiveMatch: true })
        .otherwise({redirectTo:"/"})
    }
    )
})()