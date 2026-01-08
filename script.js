let bookLibrary = [];

function Book(title, author, pages, read, id) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

Book.prototype.readStatus = function() {

    this.read = !this.read;
}

function addBook(event) {

    if (!form.reportValidity()) {
        return;
    }

    event.preventDefault();

    let bookTitle = document.querySelector("input[id='title']");
    let bookAuthor = document.querySelector("input[id='author']");
    let bookPages = document.querySelector("input[id='pages']");
    let bookRead = document.querySelector("input[id='read']");
    let bookId = crypto.randomUUID();

    let book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked, bookId);
    
    bookLibrary.push(book);


    showBook();
}

function showBook() {

    bookShelf.replaceChildren();
    
    for (let book of bookLibrary) {

        // Create DOM elements

        let bookElement = document.createElement("div");

        let bookTitle = document.createElement("p");
        let bookAuthor = document.createElement("p");
        let bookPages = document.createElement("p");

        let bookReadWrapper = document.createElement("div");
        let bookReadStatus = document.createElement("input");
        let bookRead = document.createElement("button");

        let bookRemove = document.createElement("button");

        // Assign element attributes

        bookElement.classList.add("book", `data-${book.id}`);

        bookTitle.classList.add("title");
        bookAuthor.classList.add("author");
        bookPages.classList.add("pages");

        bookReadWrapper.classList.add("readWrapper");

        bookReadStatus.setAttribute("type","checkbox");
        bookReadStatus.setAttribute("disabled","");

        bookRemove.classList.add("remove");


        // Add corresponding element values

        bookTitle.textContent = book.title;
        bookAuthor.textContent = `written by ${book.author}`;
        bookPages.textContent = `${book.pages} pages`;
        bookReadStatus.checked = book.read;

        if (bookReadStatus.checked) {
            bookRead.textContent = "already read";
        }
        else {
            bookRead.textContent = "not yet read";
        }
        
        bookRemove.textContent = "Checkout Book";


        // Append DOM elements

        bookShelf.appendChild(bookElement);

        bookElement.appendChild(bookTitle);
        bookElement.appendChild(bookAuthor);
        bookElement.appendChild(bookPages);

        bookElement.appendChild(bookReadWrapper);
        bookReadWrapper.appendChild(bookReadStatus);
        bookReadWrapper.appendChild(bookRead);

        bookElement.appendChild(bookRemove);
        

        bookRead.addEventListener("click",()=>{
            
            book.readStatus();
            bookReadStatus.checked = book.read;

            if (bookReadStatus.checked) {
            bookRead.textContent = "already read";
            }
            else {
                bookRead.textContent = "not yet read";
            }
        
            
            }
        );

        bookRemove.addEventListener("click", ()=>{
            
            bookShelf.removeChild(bookElement);

            bookLibrary = bookLibrary.filter((item)=>{
                if (item.id != book.id) {
                    return true;
                }
                else {
                    return false;
                }
            });
            
            } 
        );
        
    }

    form.reset();
    
}



let book1 = new Book("The Art of War",
                    "Sun Tzu",
                    "100",
                    false,
                    "0000-1111-2222"
);

let book2 = new Book("Meditations",
                    "Marcus Aurelius",
                    "200",
                    true,
                    "3333-4444-5555"
);

bookLibrary.push(book1, book2);

let bookShelf = document.querySelector(".book-shelf");
// let book = document.createElement("div");


let form = document.querySelector('form');
let showForm = document.querySelector('button.show');
let submitForm = document.querySelector('button[type=submit]');

showForm.addEventListener("click",()=>{
    // form.setAttribute("style","visibility:visible");
    form.classList.toggle("show");
    showForm.classList.toggle("hide");

    }
);


submitForm.addEventListener("click", addBook);
showBook();
