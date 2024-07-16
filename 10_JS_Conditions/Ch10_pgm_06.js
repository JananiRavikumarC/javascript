// A neater else-if block

var getGuesser = function (range, offset) {
  offset = offset || 0;
    var secret = Math.floor(Math.random() * range + offset);
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done! You guessed the secret number.";
      } else if (userNumber > secret) {
        return "Too high! Try a lower number.";
      } else {
        return "Too low! Try a higher number.";
      }
    };
  };
  
  var guess = getGuesser();
  console.log(guess(15));
  
  
  /* Further Adventures
   *
   * Let's change getGuesser to include a parameter
   * for setting the number of possible numbers to guess.
   *
   * e.g. getGuesser(20) will create random numbers
   * from 1 to 20. That's 20 possible numbers.
   *
   * 1) Add a 'range' parameter to the function
   *    definition of getGuesser.
   *
   *    var getGuesser = function (range) {
   *
   * 2) Change the 10 on line 7 to 'range'.
   *
   *    var secret = Math.floor(Math.random() * range + 1);
   *
   * 3) Include an argument when getGuesser is called
   *    on line 20.
   *
   *    var guess = getGuesser(20);
   *
   * 4) Test the game.
   *
   * 5) Now add a second parameter, 'offset'
   *    and update the code to choose random numbers
   *    greater than or equal to the value of offset.
   *
   */