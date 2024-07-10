// Displaying an object's properties on the console

var movie1;
var movie2;
movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");
movie2 = {
  title: "Inception",
  actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
  directors: "Christopher Nolan"
};
console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");
var blogPost = {
  title: "Learning JavaScript",
  author: "Jane Doe",
  date: "July 10, 2024",
  content: "JavaScript is a versatile and powerful programming language used for web development. It allows you to create dynamic and interactive web applications."
};

console.log("Blog Post Information");
console.log("------------------------------");
console.log("Title: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("Date: " + blogPost.date);
console.log("Content: " + blogPost.content);
console.log("------------------------------");
/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */