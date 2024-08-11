// Write a pattern which identify if a string is a valid JavaScript variable
function is_valid_variable(variable) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return regex.test(variable);
  }
is_valid_variable('first_name') // True
is_valid_variable('first-name') // False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') // True