// DOM: Mini Project

// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// 1. The year color is changing every 1 second
// 2. The date and time background color is changing every on seconds
// 3. Completed challenge has background green
// 4. Ongoing challenge has background yellow
// 5. Coming challenges have background red



// <!-- index.html -->


// <!DOCTYPE html>
//<html lang="en">
  //<head>
    //<meta charset="UTF-8">
    //<meta name="viewport" content="width=device-width, initial-scale=1.0">
    //<title>JavaScript for Everyone: DOM</title>
    //<style>
    //   .wrapper {
    //     padding: 20px;
    //     font-family: Arial, sans-serif;
    //   }
    //   h1, h2 {
    //     text-align: center;
    //   }
    //   ul {
    //     list-style-type: none;
    //     padding: 0;
    //   }
    //   li {
    //     padding: 10px;
    //     margin: 5px 0;
    //     font-size: 18px;
    //   }
    //   .completed {
    //     background-color: green;
    //     color: white;
    //   }
    //   .ongoing {
    //     background-color: yellow;
    //     color: black;
    //   }
    //   .coming {
    //     background-color: red;
//         color: white;
//       }
//       .year {
//         text-align: center;
//         font-size: 24px;
//       }
//       .datetime {
//         text-align: center;
//         font-size: 18px;
//         padding: 10px;
//       }
//     </style>
//   </head>
//   <body>
//     <div class="wrapper">
        // <h1>JavaScript Challenges in 2024</h1>
        // <h2 id="year">2024</h2>
        // <div id="datetime" class="datetime"></div>
        // <ul>
        //     <li class="completed">30DaysOfPython Challenge Done</li>
        //     <li class="ongoing">30DaysOfJavaScript Challenge Ongoing</li>
        //     <li class="coming">30DaysOfReact Challenge Coming</li>
        //     <li class="coming">30DaysOfFullStack Challenge Coming</li>
        //     <li class="coming">30DaysOfDataAnalysis Challenge Coming</li>
        //     <li class="coming">30DaysOfReactNative Challenge Coming</li>
        //     <li class="coming">30DaysOfMachineLearning Challenge Coming</li>
    //     </ul>
    // </div>

    // <script>
    //   // Function to change the year color every 1 second
    //   const changeYearColor = () => {
    //     const yearElement = document.getElementById('year');
    //     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33F3'];
    //     let colorIndex = 0;

    //     setInterval(() => {
    //       yearElement.style.color = colors[colorIndex];
    //       colorIndex = (colorIndex + 1) % colors.length;
    //     }, 1000);
    //   };

    //   // Function to change the background color of datetime every 1 second
    //   const changeDateTimeBackground = () => {
    //     const datetimeElement = document.getElementById('datetime');
    //     const colors = ['#FFFF99', '#FF9999', '#99FF99', '#9999FF', '#FFCC99'];
    //     let colorIndex = 0;

    //     setInterval(() => {
    //       datetimeElement.style.backgroundColor = colors[colorIndex];
    //       colorIndex = (colorIndex + 1) % colors.length;
    //     }, 1000);
    //   };

    //   // Function to update date and time every second
    //   const updateDateTime = () => {
    //     const datetimeElement = document.getElementById('datetime');

    //     setInterval(() => {
    //       const now = new Date();
    //       datetimeElement.textContent = now.toLocaleString();
    //     }, 1000);
    //   };

    //   // Initialize functions
    //   changeYearColor();
    //   changeDateTimeBackground();
    //   updateDateTime();
    // </script>
  //</body>
//</html>
