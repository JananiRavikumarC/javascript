// A function to create planets

var buildCar;
var getCarInfo;
var Car1;
var Car2;

buildCar = function (brand,model,year,color) {
    return {
        brand:brand,
        model:model,
        year:year,
        color:color
    };
};

getCarInfo = function (car) {
    return `${car.year} ${car.brand} ${car.model},color:${car.color}`;
};

Car1 = buildCar("Toyoto","Camry",2023,"Red");
Car2 = buildCar("Ford","Civic",2022,"Blue");

console.log(getCarInfo(Car1));
console.log(getCarInfo(Car2));



/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */