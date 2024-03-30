// script.js
class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  }
  
  const myLibrary = [];
  
  function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
  }
  
  function displayBooks() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';
    myLibrary.forEach((book, index) => {
      const bookDiv = document.createElement('div');
      bookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read ? 'read' : 'not read'}`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        displayBooks();
      });
      bookDiv.appendChild(removeBtn);
      libraryDiv.appendChild(bookDiv);
    });
  }
  
  document.getElementById('new-book-btn').addEventListener('click', () => {
    const dialog = document.getElementById('new-book-dialog');
    dialog.showModal();
  });
  
  document.getElementById('new-book-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    addBookToLibrary(title, author, pages, read);
    displayBooks();
    document.getElementById('new-book-dialog').close();
  });
  
  displayBooks();
  