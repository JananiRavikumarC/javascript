const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Function to fetch and calculate the average cat weight
const fetchAverageCatWeight = async () => {
  try {
    const response = await fetch(catsAPI);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const cats = await response.json();

    const totalWeight = cats.reduce((acc, cat) => {
      const weightInKg = cat.weight.metric.split(' - ').map(weight => parseFloat(weight)).filter(w => !isNaN(w));
      if (weightInKg.length > 0) {
        return acc + (weightInKg[0] + (weightInKg[1] || weightInKg[0])) / 2;
      }
      return acc;
    }, 0);
    
    const averageWeight = totalWeight / cats.length;
    console.log(`Average weight of cats: ${averageWeight.toFixed(2)} kg`);
  } catch (error) {
    console.error('Error fetching cat breeds:', error);
  }
};

// Function to fetch and find the 10 largest countries by area
const fetchLargestCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const countries = await response.json();

    const largestCountries = countries
      .sort((a, b) => b.area - a.area) // Sort countries by area in descending order
      .slice(0, 10); // Get the top 10 largest countries

    largestCountries.forEach((country, index) => {
      console.log(`${index + 1}. ${country.name}: ${country.area} km²`);
    });
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

// Function to count the total number of languages used as official languages
const countOfficialLanguages = async () => {
  try {
    const response = await fetch(countriesAPI);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const countries = await response.json();

    const languages = countries.flatMap(country => country.languages.map(lang => lang.name));
    const uniqueLanguages = new Set(languages); // Use Set to get unique languages

    console.log(`Total number of official languages: ${uniqueLanguages.size}`);
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

// Execute the functions
fetchAverageCatWeight();
fetchLargestCountries();
countOfficialLanguages();


// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.