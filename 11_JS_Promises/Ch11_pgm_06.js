const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchCatNames = async () => {
  try {
    // Fetch data from the cats API
    const response = await fetch(catsAPI);
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the response data as JSON
    const catBreeds = await response.json();

    // Extract cat names from the data
    const catNames = catBreeds.map(cat => cat.name);

    // Print out the cat names
    console.log(catNames);
  } catch (error) {
    console.error('Error fetching cat breeds:', error);
  }
};

// Call the function to fetch and print cat names
fetchCatNames();


// Print out all the cat names in to catNames variable.