const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const narnia = new Book('Narnia', 'C.S Lewis', 200, false);
const narniaTwo = new Book('Narnia Two', 'C.S Lewis', 200, true);
const narniaThree = new Book('Narnia Three', 'C.S Lewis', 200, false);
const narniaFour = new Book('Narnia Four', 'C.S Lewis', 200, true);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(narnia);
addBookToLibrary(narniaTwo);
addBookToLibrary(narniaThree);
addBookToLibrary(narniaFour);

console.log(myLibrary);

const library = document.querySelector(".library");

// Accepts an array of objects
function displayBooks(books) {
    for (const book of books) {
        // create book card
        const bookCard = document.createElement("div");
        bookCard.setAttribute("id", `book-}`);
        bookCard.setAttribute('class', 'book-card')

        // create book title element
        const title = document.createElement('h2');
        title.textContent = book.title;
        bookCard.appendChild(title);

        // create author element
        const author = document.createElement('p')
        author.textContent = book.author;
        bookCard.appendChild(author)

        // create pages element
        const pages = document.createElement('p')
        pages.textContent = book.pages;
        bookCard.appendChild(pages)

        // create read status element
        const read = document.createElement('p')
        const readStatus = book.read ? 'read' : 'Unread';
        read.innerText = readStatus;
        bookCard.appendChild(read)

        // add book card to DOM
        library.appendChild(bookCard);
    }
}

displayBooks(myLibrary);