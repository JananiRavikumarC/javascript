// Guess the number

var secret = 8;
var guess = function (userNumber) {
if (userNumber === secret) {
  console.log("Well done! You guessed the secret number.");
} else if (userNumber > secret) {
  console.log("Too high! Try a lower number.");
} else {
  console.log("Too low! Try a higher number.");
}
};
guess(5);
guess(10);
guess(8);


/* Further Adventures
 *
 * 1) Click run.
 *
 * 2) Call the guess function at the prompt.
 *    e.g. guess(2)
 *
 * 3) Try a few different numbers as arguments.
 *
 * The program only prints "Well done!" when the
 * number you guess matches the secret number.
 *
 * The strict equality operator, ===, checks if
 * two values are equal.
 *
 * 4) Change the condition in parentheses to now
 *    check if the guess is greater than the secret.
 *
 *    if (userNumber > secret)
 *
 * 5) Change the message logged to "Too high!"
 *
 * 6) Run and test the updated program.
 *
 */