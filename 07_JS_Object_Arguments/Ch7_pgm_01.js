// Passing a function an object as an argument

var planet1;
var getPlanetInfo;
var planet2;
planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};
planet2 = {
    name:"Earth",
    position : 3,
    type : "Terrestrial Planet",
    radius : 6371,
    sizeRank : 5
}
getPlanetInfo = function (planet) {
    return "planet:\n" + "Planet Name:" + planet.name+ " planet number: " + planet.position + "planet type:" + planet.type + "planet radius:" + planet.radius + "size rank:"+ planet.sizeRank ;
};

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));



/* Further Adventures
 *
 * 1) Create a second planet object.
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *
 */