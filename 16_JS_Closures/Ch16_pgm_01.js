// Level 1

// Create a closure which has one inner function

// Level 2

// Create a closure which has three inner functions

// Level 3

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner 
// variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance inner functions. Incomes is a set of incomes and its description and 
// expenses is also a set of expenses and its description.

//Level 1

function outerFunction() {
    let count = 0;
  
    function increment() {
      count++;
      console.log('Incremented Count:', count);
    }
  
    function decrement() {
      count--;
      console.log('Decremented Count:', count);
    }
  
    function getCount() {
      console.log('Current Count:', count);
    }
  
    return {
      increment,
      decrement,
      getCount
    };
  }
  
  const myClosures = outerFunction();
  myClosures.increment(); // Logs: Incremented Count: 1
  myClosures.increment(); // Logs: Incremented Count: 2
  myClosures.getCount(); // Logs: Current Count: 2
  myClosures.decrement(); // Logs: Decremented Count: 1
  myClosures.getCount(); // Logs: Current Count: 1

  //Level 2

  function outerFunction() {
    let count = 0;
  
    function increment() {
      count++;
      console.log('Incremented Count:', count);
    }
  
    function decrement() {
      count--;
      console.log('Decremented Count:', count);
    }
  
    function getCount() {
      console.log('Current Count:', count);
    }
  
    return {
      increment,
      decrement,
      getCount
    };
  }
  
  const myclosures = outerFunction();
  myClosures.increment(); // Logs: Incremented Count: 1
  myClosures.increment(); // Logs: Incremented Count: 2
  myClosures.getCount(); // Logs: Current Count: 2
  myClosures.decrement(); // Logs: Decremented Count: 1
  myClosures.getCount(); // Logs: Current Count: 1

  //Level 3

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
  
  const myAccount = personAccount();
  
  myAccount.addIncome('Salary', 5000);
  myAccount.addExpense('Rent', 1500);
  myAccount.addExpense('Utilities', 300);
  
  console.log(myAccount.totalIncome()); // Logs: 5000
  console.log(myAccount.totalExpense()); // Logs: 1800
  console.log(myAccount.accountInfo()); // Logs: Account Holder: John Doe
  console.log(myAccount.accountBalance()); // Logs: 3200
  
  