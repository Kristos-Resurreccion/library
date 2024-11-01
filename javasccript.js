const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const narnia = new Book('Narnia', 'C.S Lewis', 200, false);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(narnia);

console.log(myLibrary);