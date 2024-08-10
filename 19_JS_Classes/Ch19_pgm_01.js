// Level 1

// 1. Create an Animal class. The class will have name, age, color, legs properties and create 
// different methods
class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  
    move() {
      console.log(`${this.name} moves with ${this.legs} legs.`);
    }
  
    getInfo() {
      return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
    }
  }
  
// 2. Create a Dog and Cat child class from the Animal Class.

// Level 2
class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs);
      this.breed = breed;
    }
  
    makeSound() {
      console.log(`${this.name} barks.`);
    }
  
    getInfo() {
      return `${super.getInfo()}, Breed: ${this.breed}`;
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs);
      this.breed = breed;
    }
  
    makeSound() {
      console.log(`${this.name} meows.`);
    }
  
    getInfo() {
      return `${super.getInfo()}, Breed: ${this.breed}`;
    }
  }
  

// Override the method you create in Animal class
class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  
    move() {
      console.log(`${this.name} moves with ${this.legs} legs.`);
    }
  
    getInfo() {
      return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
    }
  }
  class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs);
      this.breed = breed;
    }
  
    // Override the makeSound method
    makeSound() {
      console.log(`${this.name} barks.`);
    }
  
    // Override the getInfo method
    getInfo() {
      return `${super.getInfo()}, Breed: ${this.breed}`;
    }
  }
  class Cat extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs);
      this.breed = breed;
    }
  
    // Override the makeSound method
    makeSound() {
      console.log(`${this.name} meows.`);
    }
  
    // Override the getInfo method
    getInfo() {
      return `${super.getInfo()}, Breed: ${this.breed}`;
    }
  }
// Create instances of Dog and Cat
const myDog = new Dog('Rex', 5, 'brown', 4, 'Labrador');
const myCat = new Cat('Whiskers', 3, 'gray', 4, 'Siamese');

// Test the overridden methods
myDog.makeSound(); // Logs: Rex barks.
myCat.makeSound(); // Logs: Whiskers meows.

console.log(myDog.getInfo()); // Logs: Name: Rex, Age: 5, Color: brown, Legs: 4, Breed: Labrador
console.log(myCat.getInfo()); // Logs: Name: Whiskers, Age: 3, Color: gray, Legs: 4, Breed: Siamese
      

// Level 3

// Let's try to develop a program which calculate measure of central tendency of a sample(mean, 
// median, mode) and measure of variability(range, variance, standard deviation). 
// In addition to those measures find the min, max, count, percentile, and frequency 
// distribution of the sample. You can create a class called Statistics and create all the 
// functions which do statistical calculations as method for the Statistics class. 
// Check the output below.
class Statistics {
    constructor(data) {
      this.data = data;
      this.count = data.length;
    }
  
    sum() {
      return this.data.reduce((acc, val) => acc + val, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count;
    }
  
    median() {
      const sorted = [...this.data].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
      } else {
        return sorted[mid];
      }
    }
  
    mode() {
      const freqMap = this.data.reduce((map, num) => {
        map[num] = (map[num] || 0) + 1;
        return map;
      }, {});
      let maxFreq = 0;
      let mode = null;
      for (const [key, value] of Object.entries(freqMap)) {
        if (value > maxFreq) {
          maxFreq = value;
          mode = key;
        }
      }
      return { mode: parseFloat(mode), count: maxFreq };
    }
  
    var() {
      const mean = this.mean();
      return this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / this.count;
    }
  
    std() {
      return Math.sqrt(this.var());
    }
  
    freqDist() {
      const freqMap = this.data.reduce((map, num) => {
        map[num] = (map[num] || 0) + 1;
        return map;
      }, {});
      return Object.entries(freqMap).map(([num, freq]) => [freq, parseFloat(num)]).sort((a, b) => b[0] - a[0]);
    }
  }
  

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

