// Level 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// 1. Explain the difference between forEach, map, filter, and reduce.

forEach: "Executes a provided function once for each array element. It doesn't return anything, primarily used for side effects like logging or modifying external states."

map: "Creates a new array by applying a provided function to each element of the original array. The original array remains unchanged."

filter: "Creates a new array with all elements that pass a test implemented by the provided function. It doesn't modify the original array."

reduce: "Reduces the array to a single value by applying a function to an accumulator and each element of the array. It accumulates a result based on the function provided."
// 2. Define a callback function before you use it in forEach, map, filter or reduce.
function logItem(item) {
  console.log(item);
}

// 3. Use forEach to console.log each country in the countries array.
countries.forEach(logItem);

// 4. Use forEach to console.log each name in the names array.
names.forEach(logItem);

// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach(logItem);

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
const upperCaseCountries = countries.map(country => country.toUpperCase());
console.log(upperCaseCountries);

// 7. Use map to create an array of countries length from countries array.
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

// 8. Use map to create a new array by changing each number to square in the numbers array
const squaredNumbers = numbers.map(number => number ** 2);
console.log(squaredNumbers);

// 9. Use map to change to each name to uppercase in the names array
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);

// 10. Use map to map the products array to its corresponding prices.
const productPrices = products.map(product => product.price);
console.log(productPrices);

// 11. Use filter to filter out countries containing land.
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);

// 12. Use filter to filter out countries having six character.
const sixCharCountries = countries.filter(country => country.length === 6);
console.log(sixCharCountries);

// 13. Use filter to filter out countries containing six letters and more in the country array.
const sixOrMoreLettersCountries = countries.filter(country => country.length >= 6);
console.log(sixOrMoreLettersCountries);

// 14. Use filter to filter out country start with 'E';
const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);

// 15. Use filter to filter out only prices with values.
const validPrices = products.filter(product => product.price !== '' && product.price !== ' ').map(product => product.price);
console.log(validPrices);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string');
}
console.log(getStringLists(['Hello', 123, 'World', true]));  // ['Hello', 'World']

// 17. Use reduce to sum all the numbers in the numbers array.
const sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumNumbers);

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const sentence = countries.reduce((acc, curr, index, arr) => {
  if (index === arr.length - 1) {
    return `${acc}, and ${curr}`;
  } else {
    return `${acc}, ${curr}`;
  }
}, 'Estonia') + ' are north European countries.';
console.log(sentence);

// 19. Explain the difference between some and every
some: "Checks if at least one element in the array passes the test implemented by the provided function. Returns true if the test is passed by any element, otherwise false."
every: "Checks if all elements in the array pass the test implemented by the provided function. Returns true only if all elements pass the test."
// 20. Use some to check if some names' length greater than seven in names array
const someNamesLongerThanSeven = names.some(name => name.length > 7);
console.log(someNamesLongerThanSeven);

// 21. Use every to check if all the countries contain the word land
const allCountriesContainLand = countries.every(country => country.includes('land'));
console.log(allCountriesContainLand);

// 22. Explain the difference between find and findIndex.
find: "Returns the first element in the array that satisfies the provided testing function. If no elements pass the test, it returns undefined."
findIndex: "Returns the index of the first element in the array that satisfies the provided testing function. If no elements pass the test, it returns -1."
// 23. Use find to find the first country containing only six letters in the countries array
const firstSixLetterCountry = countries.find(country => country.length === 6);
console.log(firstSixLetterCountry);

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
const firstSixLetterCountryIndex = countries.findIndex(country => country.length === 6);
console.log(firstSixLetterCountryIndex);

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayIndex = countries.findIndex(country => country === 'Norway');
console.log(norwayIndex);

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = countries.findIndex(country => country === 'Russia');
console.log(russiaIndex);
