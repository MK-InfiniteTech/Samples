(function () {
    var headlinesController = angular.module("myApp").controller("headlinesController", function ($scope) {
        $scope.headlines = [
            { title: "Title One", description: "1 description", datePublished: "09/Oct/2016", articleBy: "MK" },
            { title: "Title Two", description: "2 Description", datePublished: "09/Oct/2016", articleBy: "MK" },
            { title: "Title Three", description: "3 Description", datePublished: "09/Oct/2016", articleBy: "MK" },
            { title: "Title Four", description: "4 Description", datePublished: "09/Oct/2016", articleBy: "MK" },
            { title: "Title Five", description: "5 Description", datePublished: "09/Oct/2016", articleBy: "MK" },
            { title: "Title Six", description: "6 Description", datePublished: "09/Oct/2016", articleBy: "MK" },
            { title: "Title Seven", description: "7 Description", datePublished: "09/Oct/2016", articleBy: "MK" },
            { title: "Title One", description: "8 Description", datePublished: "09/Oct/2016", articleBy: "MK" },
            { title: "Title One", description: "9 Description", datePublished: "09/Oct/2016", articleBy: "MK" },
            { title: "Title One", description: "10 Description", datePublished: "09/Oct/2016", articleBy: "MK" },
        ]
    })
})();