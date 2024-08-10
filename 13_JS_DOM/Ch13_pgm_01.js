// Level 1

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// 4. Loop through the nodeList and get the text content of each paragraph
// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// 6. Set id and class attribute for all the paragraphs using different attribute setting methods

// Level 2

// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// 3. Set text content, id and class to each paragraph
// index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Paragraph Manipulation</title>
//   <style>
//     p {
//       margin: 10px 0;
//     }
//   </style>
// </head>
// <body>
//   <p id="para1">First Paragraph</p>
//   <p id="para2">Second Paragraph</p>
//   <p id="para3">Third Paragraph</p>
//   <p id="para4">Fourth Paragraph</p>

//   <script>
//     const firstParagraph = document.querySelector('p');
//     console.log('First paragraph using querySelector:', firstParagraph.textContent);

//     const para1 = document.querySelector('#para1');
//     const para2 = document.querySelector('#para2');
//     const para3 = document.querySelector('#para3');
//     const para4 = document.querySelector('#para4');
    
//     console.log('Paragraph 1 by ID:', para1.textContent);
//     console.log('Paragraph 2 by ID:', para2.textContent);
//     console.log('Paragraph 3 by ID:', para3.textContent);
//     console.log('Paragraph 4 by ID:', para4.textContent);

//     forEach(paragraph => {
//       console.log('Paragraph text:', paragraph.textContent);
//     });


//     para4.textContent = 'Updated Fourth Paragraph';

//     forEach((paragraph, index) => {

//       paragraph.setAttribute('data-index', index + 1);
//       paragraph.className = `paragraph-${index + 1}`;
//     });

//     forEach(paragraph => {
//       paragraph.style.color = 'black'; 
//       paragraph.style.backgroundColor = 'lightgrey';
//       paragraph.style.border = '1px solid black';
//       paragraph.style.fontSize = '16px';
//       paragraph.style.fontFamily = 'Arial, sans-serif';
//     });

//     forEach((paragraph, index) => {
//       if (index % 2 === 0) { 
//         paragraph.style.color = 'green';
//       } else {
//         paragraph.style.color = 'red';
//       }
//     });

//     forEach((paragraph, index) => {
//       paragraph.textContent = `Paragraph ${index + 1} updated`;
//       paragraph.id = `para${index + 1}`;
//       paragraph.className = `paragraph-${index + 1}-updated`;
//     });
//   </script>
// </body>
// </html>
