// Generating the keyboard code code using even listener. 

// The image below.

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_keycode_day_3.2.gif

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Keycode Display</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       background-color: #f0f0f0;
//       margin: 0;
//       padding: 20px;
//     }
//     .container {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       height: 100vh;
//     }
//     .keycode-display {
//       font-size: 24px;
//       margin: 20px;
//     }
//     .key {
//       font-size: 48px;
//       margin: 10px;
//       padding: 20px;
//       background-color: #fff;
//       border: 2px solid #ddd;
//       border-radius: 5px;
//       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     }
//     .code {
//       font-size: 24px;
//       color: #333;
//     }
//   </style>
// </head>
// <body>
//   <div class="container">
//     <div class="keycode-display">
//       <div class="key" id="key">Press a key</div>
//       <div class="code" id="code">Key Code: </div>
//     </div>
//   </div>

//   <script>
//     const updateKeyCodeDisplay = (event) => {
//       const keyElement = document.getElementById('key');
//       const codeElement = document.getElementById('code');

//       keyElement.textContent = event.key || 'Unknown Key';
//       codeElement.textContent = `Key Code: ${event.keyCode || 'Unknown Code'}`;
//     };
//     document.addEventListener('keydown', updateKeyCodeDisplay);
//   </script>
// </body>
// </html>

