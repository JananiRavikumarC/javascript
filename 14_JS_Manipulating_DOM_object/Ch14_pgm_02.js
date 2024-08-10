// Use the countries array to display all the countries. 


//See the design

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_countries_aray_day_2.2.png

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Countries Display</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       margin: 0;
//       padding: 0;
//       background-color: #f0f0f0;
//     }
//     .container {
//       width: 90%;
//       margin: 0 auto;
//       padding: 20px;
//       display: flex;
//       flex-wrap: wrap;
//       gap: 20px;
//       justify-content: center;
//     }
//     .country-card {
//       background: white;
//       border-radius: 10px;
//       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//       overflow: hidden;
//       width: 200px;
//       text-align: center;
//       padding: 15px;
//       transition: transform 0.3s ease;
//     }
//     .country-card:hover {
//       transform: scale(1.05);
//     }
//     .country-card img {
//       width: 100%;
//       height: auto;
//     }
//     .country-name {
//       font-size: 18px;
//       font-weight: bold;
//       margin: 10px 0;
//     }
//     .country-details {
//       font-size: 14px;
//       color: #555;
//     }
//   </style>
// </head>
// <body>
//   <div class="container" id="countries-container"></div>

//   <script>
//     const countries = [
//       {
//         name: "United States",
//         capital: "Washington, D.C.",
//         population: "331,002,651",
//         area: "9,525,067 km²",
//         flag: "https://restcountries.com/v2/alpha/us?fields=flags"
//       },
//       {
//         name: "Canada",
//         capital: "Ottawa",
//         population: "37,742,154",
//         area: "9,984,670 km²",
//         flag: "https://restcountries.com/v2/alpha/ca?fields=flags"
//       },
//     ];

//     // Function to create and display country cards
//     const displayCountries = () => {
//       const container = document.getElementById('countries-container');

//       countries.forEach(country => {
//         const countryCard = document.createElement('div');
//         countryCard.className = 'country-card';

//         const flagImg = document.createElement('img');
//         flagImg.src = country.flag;
//         flagImg.alt = `${country.name} flag`;

//         const countryName = document.createElement('div');
//         countryName.className = 'country-name';
//         countryName.textContent = country.name;

//         const countryDetails = document.createElement('div');
//         countryDetails.className = 'country-details';
//         countryDetails.innerHTML = `
//           <p><strong>Capital:</strong> ${country.capital}</p>
//           <p><strong>Population:</strong> ${country.population}</p>
//           <p><strong>Area:</strong> ${country.area}</p>
//         `;

//         countryCard.appendChild(flagImg);
//         countryCard.appendChild(countryName);
//         countryCard.appendChild(countryDetails);

//         container.appendChild(countryCard);
//       });
//     };
//     displayCountries();
//   </script>
// </body>
// </html>
