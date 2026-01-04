// Create array for storage
// Create book constructor - title, author, pages, unique ID, read?
// Test new book with dummy values and display in dummy DOM
// Create function to store book data - will be linked to form submit button
// Create form area in HTML - will look like a library card
// Display books in page shelf
// Add buttons on each book to remove from shelf and for toggling read status

let bookLibrary = [];

function NewBook(title, author, pages, id, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.read = read;

    //test if new object can be directly added in bookShelf:
    // bookLibrary.push(this);
}

function addBook(book) {


}

function removeBook(book) {


}

let newBook = new NewBook("Bible", "God", 1234, "0000", false);
let newBook2 = new NewBook("asd", "fgh", 1111, "3333", true);


let bookShelf = document.querySelector(".book-shelf");
let book = document.createElement("div");

// book.textContent = "test";

for (item in newBook) {
    book.textContent += newBook[item];
}

bookShelf.appendChild(book);

console.log(bookLibrary);


let form = document.querySelector('form');
let showForm = document.querySelector('button.show');

showForm.addEventListener("click",()=>{
    // form.setAttribute("style","visibility:visible");
    form.classList.toggle("show");
    showForm.classList.toggle("hide");

    console.log("Yo");
}
   
);

// showForm.textContent = "Test Button tho"

// console.log(showFrom);