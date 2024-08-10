// Level 1

// Store you first name, last name, age, country, city in your browser localStorage.

// Store personal information
const firstName = 'John';
const lastName = 'Doe';
const age = 30;
const country = 'USA';
const city = 'New York';

// Store each piece of information in localStorage
localStorage.setItem('firstName', firstName);
localStorage.setItem('lastName', lastName);
localStorage.setItem('age', age);
localStorage.setItem('country', country);
localStorage.setItem('city', city);

// Retrieve and log the stored values (for verification)
console.log('First Name:', localStorage.getItem('firstName'));
console.log('Last Name:', localStorage.getItem('lastName'));
console.log('Age:', localStorage.getItem('age'));
console.log('Country:', localStorage.getItem('country'));
console.log('City:', localStorage.getItem('city'));



// Level 2

// Create a student object. The student object will have first name, last name, age, skills, 
// country, enrolled keys and values for the keys. Store the student object in your browser 
// localStorage.

// Create a student object
const student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    skills: ['HTML', 'CSS', 'JavaScript'],
    country: 'Canada',
    enrolled: true
  };
  
  // Store the student object in localStorage
  localStorage.setItem('student', JSON.stringify(student));
  
  // Retrieve and parse the student object (for verification)
  const storedStudent = JSON.parse(localStorage.getItem('student'));
  console.log(storedStudent);
  


// Level 3

// Create an object called personAccount. It has firstname, lastname, incomes, expenses 
// properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance methods. Incomes is a set of incomes and its description and expenses is 
// also a set of expenses and its description.

function personAccount() {
    let firstname = 'John';
    let lastname = 'Doe';
    let incomes = [];
    let expenses = [];
  
    function totalIncome() {
      return incomes.reduce((total, income) => total + income.amount, 0);
    }
  
    function totalExpense() {
      return expenses.reduce((total, expense) => total + expense.amount, 0);
    }
  
    function accountInfo() {
      return `Account Holder: ${firstname} ${lastname}`;
    }
  
    function addIncome(description, amount) {
      incomes.push({ description, amount });
    }
  
    function addExpense(description, amount) {
      expenses.push({ description, amount });
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      totalIncome,
      totalExpense,
      accountInfo,
      addIncome,
      addExpense,
      accountBalance
    };
  }
  
  // Usage example
  const myAccount = personAccount();
  
  myAccount.addIncome('Salary', 5000);
  myAccount.addExpense('Rent', 1500);
  myAccount.addExpense('Utilities', 300);
  
  console.log(myAccount.totalIncome()); // Logs: 5000
  console.log(myAccount.totalExpense()); // Logs: 1800
  console.log(myAccount.accountInfo()); // Logs: Account Holder: John Doe
  console.log(myAccount.accountBalance()); // Logs: 3200
  
  // Store the account data in localStorage
  localStorage.setItem('personAccount', JSON.stringify({
    firstname: 'John',
    lastname: 'Doe',
    incomes,
    expenses
  }));
  
  // Retrieve and parse the account data (for verification)
  const storedAccount = JSON.parse(localStorage.getItem('personAccount'));
  console.log(storedAccount);
  