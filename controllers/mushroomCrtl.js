"use strict";

angular.module("mushroomMania").controller("MushroomtCrl", function($scope, MushroomFactory) {
    MushroomFactory.getMushrooms()
    .then( (mushroomData) => {
        console.log("Mushroom Data", mushroomData.data);
        $scope.mushroomList = mushroomData.data;
    });
});