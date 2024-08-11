// Level 2

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

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalProductPrice = products
  .map(product => parseFloat(product.price)) // Convert prices to numbers
  .filter(price => !isNaN(price)) // Filter out invalid prices
  .reduce((acc, curr) => acc + curr, 0); // Sum up the prices

console.log(totalProductPrice); // Output: 27

// 2. Find the sum of price of products using only reduce reduce(callback))
const totalPriceWithReduce = products.reduce((acc, curr) => {
  const price = parseFloat(curr.price);
  return acc + (isNaN(price) ? 0 : price);
}, 0);

console.log(totalPriceWithReduce); // Output: 27

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(pattern) {
  return countries.filter(country => country.includes(pattern));
}

console.log(categorizeCountries('land')); // Output: ['Finland', 'IceLand']
console.log(categorizeCountries('ia'));   // Example: ['Russia', 'India']

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function countCountryInitials(countries) {
  return countries.reduce((acc, country) => {
    const initial = country[0];
    const found = acc.find(item => item.letter === initial);
    if (found) {
      found.count += 1;
    } else {
      acc.push({ letter: initial, count: 1 });
    }
    return acc;
  }, []);
}

console.log(countCountryInitials(countries)); 
// Output: [{letter: 'F', count: 1}, {letter: 'S', count: 1}, {letter: 'D', count: 1}, {letter: 'N', count: 1}, {letter: 'I', count: 1}]

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(countries) {
  return countries.slice(0, 10);
}

console.log(getFirstTenCountries(countries)); 
// Output: ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries(countries) {
  return countries.slice(-10);
}

console.log(getLastTenCountries(countries)); 
// Output: ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function mostCommonInitial(countries) {
  const initials = countries.map(country => country[0]);
  const counts = initials.reduce((acc, initial) => {
    acc[initial] = (acc[initial] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
}

console.log(mostCommonInitial(countries)); 
// Output: 'F' (if adding more countries, this might change)
