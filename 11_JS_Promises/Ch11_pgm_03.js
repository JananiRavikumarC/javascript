// Promise constructor

// syntax

// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
//   })

// Promise
// Callbacks Example
const doSomethingWithCallback = (callback) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    callback(null, skills); // Pass null for error and skills as result
  }, 2000);
};

doSomethingWithCallback((err, result) => {
  if (err) {
    console.log('Callback Error:', err);
  } else {
    console.log('Callback Result:', result);
  }
});

// Promises Example
const doSomethingWithPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    if (skills.length > 0) {
      resolve(skills); // Resolve with skills
    } else {
      reject('Something wrong has happened'); // Reject with an error message
    }
  }, 2000);
});

doSomethingWithPromise
  .then(result => {
    console.log('Promise Result:', result);
  })
  .catch(error => {
    console.log('Promise Error:', error);
  });



    // ["HTML", "CSS", "JS"]