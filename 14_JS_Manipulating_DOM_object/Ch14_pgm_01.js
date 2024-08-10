// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.

// 1. Even numbers background is green
// 2. Odd numbers background is yellow
// 3. Prime numbers background is red

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Number Color Coding</title>
//   <style>
//     .container {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 10px;
//       padding: 20px;
//       border: 1px solid #ddd;
//     }
//     .number {
//       width: 50px;
//       height: 50px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       font-size: 20px;
//       color: white;
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
//   <div class="container" id="number-container"></div>

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
//       const container = document.getElementById('number-container');

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
