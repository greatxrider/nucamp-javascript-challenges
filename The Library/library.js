class Book {
    constructor(title, author, available = true) {
        this.title = title;
        this.author = author;
        this.available = available;
    }
}

const library = {
    books: [],

    addBook: function (title, author) {
        const book = new Book(title, author);
        this.books.push(book);
        console.log(
            `Successfully added ${book.title} by ${book.author} to the library! ` +
            `There are now ${this.books.length} books in the library.`
        );
    },

    checkOutBook: function (title) {
        try {
            const selectedBook = this.books.find(book => book.title === title);
            if (selectedBook) {
                if (selectedBook.available === true) {
                    selectedBook.available = false;
                    console.log(`Checked out: ${title}`);
                } else {
                    console.loge(`We have the ${title} book but is unavailable.`);
                }
            } else if (selectedBook === undefined){
                throw new Error(`The ${title} book is not found in the libray.`);
            }
        } catch (err) {
            console.log(err.message);
        }
    },

    getAvailableBooks: function () {
        let booklist = [];
        for (let book of this.books) {
            if (book.available) {
                booklist.push(book.title);
            }
        }
        console.log(
            `There are ${booklist.length
            } titles currently on the shelf: ${booklist.join(", ")}`
        );
    },
};

const newBooks = `[
        { "title": "To Kill a Mockingbird", "author": "Harper Lee" },
        { "title": "1984", "author": "George Orwell" },
        { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },
        { "title": "Pride and Prejudice", "author": "Jane Austen" },
        { "title": "The Catcher in the Rye", "author": "J.D. Salinger" },
        { "title": "The Lord of the Rings", "author": "J.R.R. Tolkien" },
        { "title": "Harry Potter and the Sorcerer's Stone", "author": "J.K. Rowling" },
        { "title": "Animal Farm", "author": "George Orwell" },
        { "title": "The Hobbit", "author": "J.R.R. Tolkien" },
        { "title": "Moby Dick", "author": "Herman Melville" }
    ]`;

function receiveBooks() {
    console.log("Adding new books to the shelves.");
    const booksToAdd = JSON.parse(newBooks);
    for (let book of booksToAdd) {
        library.addBook(book.title, book.author);
    }
    console.log("Successfully added new books to the shelves.");
}

// Tests
console.log(
    `There are currently ${library.books.length} books in the library's database.`
);
library.addBook("Eloquent JavaScript", "Marijn Haverbeke");
receiveBooks(newBooks);
library.checkOutBook("Eloquent JavaScript");
library.checkOutBook("Grokking the Coding Interview");
library.getAvailableBooks();
