// Displaying a menu

var displayMenu;

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(3) View settings");
    console.log("(4) Delete file");
	console.log("(9) Quit");
};

displayMenu();

var displayMyMenu;

displayMyMenu = function () {
  console.log("Custom Menu:");
  console.log("(1) Start new project");
  console.log("(2) Load existing project");
  console.log("(3) Save project");
  console.log("(4) Exit to main menu");
};

displayMyMenu();

/* Further Adventures
 *
 * 1) Add two more options to the displayMenu
 *    function and run the program.
 *
 * 2) Create your own displayMyMenu function.
 *
 * 3) Add a line to call your function as well.
 *    Run the program
 *
 */