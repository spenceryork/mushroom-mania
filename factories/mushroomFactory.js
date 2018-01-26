"use strict";

angular.module("mushroomMania").factory("MushroomFactory", function($q, $http) {
    let getMushrooms = () => {
        return $q( (resolve, reject) => {
           $http
           .get("https://angular-fecd8.firebaseio.com/mushrooms.json")
           .then( (mushrooms) => {
               let mushArr = Object.values(mushrooms.data);
               resolve(mushArr);
           })
           .catch( (err) => {
               reject(err);
           });
        });
    };
    return { getMushrooms };
});