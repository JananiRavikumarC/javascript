// Use the countries information, in the data folder. Sort countries by name, by capital, by population

// Sort by name
const sortByName = countries.sort((a, b) => a.name.localeCompare(b.name));

// Sort by capital
const sortByCapital = countries.sort((a, b) => a.capital.localeCompare(b.capital));

// Sort by population
const sortByPopulation = countries.sort((a, b) => b.population - a.population);

console.log(sortByName);
console.log(sortByCapital);
console.log(sortByPopulation);

// *** Find the 10 most spoken languages:
function mostSpokenLanguages(countries, topN) {
    const languageCount = {};
  
    countries.forEach(country => {
      country.languages.forEach(language => {
        if (languageCount[language]) {
          languageCount[language]++;
        } else {
          languageCount[language] = 1;
        }
      });
    });
  
    const sortedLanguages = Object.entries(languageCount)
      .map(([language, count]) => ({ country: language, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, topN);
  
    return sortedLanguages;
  }
  
  console.log(mostSpokenLanguages(countries, 10));
  console.log(mostSpokenLanguages(countries, 3));
  

// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25}
]


// *** Use countries_data.js file create a function which create the ten most populated countries
function mostPopulatedCountries(countries, topN) {
    return countries
      .map(country => ({ country: country.name, population: country.population }))
      .sort((a, b) => b.population - a.population)
      .slice(0, topN);
  }
  
  console.log(mostPopulatedCountries(countries, 10));
  console.log(mostPopulatedCountries(countries, 3));
  

console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]



