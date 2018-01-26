"use strict";

angular.module("mushroomMania", ["ngRoute"])
.config($routeProvider => {
    $routeProvider
    .when("/", {
        templateUrl: "partials/mushrooms.html",
        controller: "MushroomtCrl"
    })
    .otherwise("/")
})
// .controller()