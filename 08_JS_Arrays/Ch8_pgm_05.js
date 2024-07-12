// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 5);

console.log(report);
var getMonthlyVisitorReport = function(monthArray, week, day) {
  var weekArray = monthArray[week - 1];
  return getVisitorReport(weekArray, day);
};
var week1 = [354, 132, 210, 221, 481, 150, 180];
var week2 = [342, 190, 230, 205, 498, 160, 175];
var week3 = [370, 120, 220, 215, 455, 140, 195];
var week4 = [360, 140, 210, 225, 470, 180, 185];
var month = [week1, week2, week3, week4];
var report1 = getMonthlyVisitorReport(month, 1, 5);
var report2 = getMonthlyVisitorReport(month, 3, 2);
var report3 = getMonthlyVisitorReport(month, 4, 7);
console.log(report2);
console.log(report3); 


/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */