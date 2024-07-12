// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

var showLarger = function (num1, num2){
    var smaller = Math.min(num1,num2);
    var larger = Math.max(num1,num2);
    console.log(larger + "is larger than" + smaller);
};
var showSmallest = function(num1,num2,num3){
    var smallest = Math.min(num1,num2,num3);
    console.log(smallest + "is the smallest of" + num1 + "," + num2 + ", and" + num3);
}
showSmaller(12, 3);
showSmaller(-10, 3);
showSmaller(7,7);
showSmaller(5.5,5.4);
showLarger(12,3);
showLarger(-10,3);
showLarger(7,7);
showLarger(5.5,5.4);
showSmallest(12,3,-5);
showSmallest(-10,3,7);
showSmallest(7,7,7);
showSmallest(5.5,5.4,9.6);



/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */