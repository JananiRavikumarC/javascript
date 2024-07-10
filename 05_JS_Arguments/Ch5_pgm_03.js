// Passing information to a function

var showMessage;

showMessage = function (message) {
	console.log("The msg is: " + message);
};

showMessage("Day delight!!!!");
showMessage("Day is awesome!!!");
showMessage("Fun unlimited");
showMessage = function (message) {
	console.log("Message received: " + message + ". Extra text");
};

showMessage("New msg");


/* Further Adventures
 *
 * 1) Change the message in the parentheses
 *    when showMessage is called on line 9.
 *
 * The value in the parentheses when showMessage is called
 * is an argument. "It's full of stars!" was the
 * original argument on line 9.
 *
 * 2) Add two more calls to the showMessage function
 *    with different arguments each time.
 *
 * 3) Change the showMessage function itself.
 *    Make it add some extra text after the
 *    message passed in.
 *
 */