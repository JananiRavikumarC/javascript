// Generating numbers and marking evens, odds and prime numbers with three different colors. 

// See the image below.

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_number_generator_day_3.1.gif

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Number Generator</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       background-color: #f9f9f9;
//       margin: 0;
//       padding: 20px;
//     }
//     .container {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 10px;
//       justify-content: center;
//     }
//     .number {
//       width: 60px;
//       height: 60px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       font-size: 20px;
//       border-radius: 5px;
//       color: white;
//       font-weight: bold;
//     }
//     .even {
//       background-color: green;
//     }
//     .odd {
//       background-color: yellow;
//       color: black;
//     }
//     .prime {
//       background-color: red;
//     }
//   </style>
// </head>
// <body>
//   <div class="container" id="numbers-container"></div>

//   <script>
//     const isPrime = (num) => {
//       if (num <= 1) return false;
//       if (num <= 3) return true;
//       if (num % 2 === 0 || num % 3 === 0) return false;
//       for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//       }
//       return true;
//     };
//     const createNumberElements = () => {
//       const container = document.getElementById('numbers-container');

//       for (let i = 1; i <= 100; i++) {
//         const div = document.createElement('div');
//         div.className = 'number';
//         div.textContent = i;
//         if (isPrime(i)) {
//           div.classList.add('prime');
//         } else if (i % 2 === 0) {
//           div.classList.add('even');
//         } else {
//           div.classList.add('odd');
//         }

//         container.appendChild(div);
//       }
//     };
//     createNumberElements();
//   </script>
// </body>
// </html>
