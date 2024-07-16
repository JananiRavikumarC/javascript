// Iterating over an array with forEach

var items;
var showInfo;
var totalLetters;
items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];
items.push("The Eiffel Tower");
items.push("Niagara Falls");
items[items.length] = "Great Wall of China";
items[items.length] = "Machu Picchu";
showInfo = function (itemToShow) {
    console.log(itemToShow + "("+ itemToShow.length + "letters)");

};
items.forEach(showInfo);
totalLetters = function(itemsArray){
  var total = 0;
  itemsArray.forEach(function(item){
    total += item.length;
  });
  return total;
};
console.log("Total number of letters: "+ totalLetters(items));



/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */