// A function with two arguments

var showSum;
var showproduct;
var showdifference;
var showquotient;
showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};
showproduct = function (number1, number2) {
	var total = number1 * number2;
	console.log("The product is " + total);
};
showdifference = function (number1, number2) {
	var total = number1 - number2;
	console.log("The difference is " + total);
};
showquotient = function (number1, number2) {
	var total = number1 /  number2;
	console.log("The quotient is " + total);
};
showSum(30, 23);
showSum(2.8, -5);
showSum(56,74);
showproduct(3,8);
showproduct(3,3,3);
showdifference(6,5);
showquotient(6,3);
/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */