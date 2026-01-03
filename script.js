// Create array for storage
// Create book constructor - title, author, pages, unique ID, read?
// Test new book with dummy values and display in dummy DOM
// Create function to store book data - will be linked to form submit button
// Create form area in HTML
// Display books in page shelf
// Add buttons on each book to remove from shelf and for toggling read status

let bookLibrary = [];

function AddBook(title, author, pages, id, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.read = read;

    //test if new object can be directly added in bookShelf:
    //bookLibrary.push(this);
}

let bookShelf = document.querySelector(".book-shelf");
let book = document.createElement("div");

book.textContent = "test";

bookShelf.appendChild(book);

