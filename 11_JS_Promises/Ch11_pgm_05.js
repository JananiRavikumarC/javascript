const countriesAPI = 'https://restcountries.com/v2/all';

const fetchCountries = async () => {
  try {
    // Fetch data from the countries API
    const response = await fetch(countriesAPI);
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the response data as JSON
    const countries = await response.json();

    // Iterate over each country and print relevant information
    countries.forEach(country => {
      const {
        name,
        capital,
        languages,
        population,
        area
      } = country;

      console.log(`Country: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Languages: ${languages.map(lang => lang.name).join(', ')}`);
      console.log(`Population: ${population}`);
      console.log(`Area: ${area} km²`);
      console.log('-----------------------------');
    });
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

// Call the function to fetch and print country data
fetchCountries();


// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.