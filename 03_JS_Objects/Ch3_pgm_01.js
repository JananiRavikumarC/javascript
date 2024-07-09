// Using variables to represent a book

var bookTitle1;
var bookAuthor1;
var bookTitle2;
var bookAuthor2;
var bookTitle3;
var bookAuthor3;

bookTitle1 = "The Hobbit";
bookAuthor1 = "J. R. R. Tolkien";
bookTitle2 = "1984";
bookAuthor2 ="george orwell";
bookTitle3 = "to kill a mockingbird";
bookAuthor3 = "harper lee";

console.log(bookTitle1 + " by " + bookAuthor1);
console.log(bookTitle2 + " by " + bookAuthor2);
console.log(bookTitle3 + " by " + bookAuthor3);
var books = [
    { title: "The Hobbit", author: "J. R. R. Tolkien" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "The Catcher in the Rye", author: "J. D. Salinger" },
    { title: "The Lord of the Rings", author: "J. R. R. Tolkien" },
    { title: "Brave New World", author: "Aldous Huxley" }
];

for (var i = 0; i < books.length; i++) {
    console.log(books[i].title + " by " + books[i].author);
}



/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */