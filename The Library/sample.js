const books = [
    { title: "lordoftherings", author: "gollumn", available: true },
    { title: "Harry", author: "potter", available: true }
];

// Find the book titled "Harry" and check its availability
const harryBook = books.find(myFunction);

function myFunction(book) {
    return book.title === "Harry";
}

if (harryBook) {
    console.log(`Is "Harry" available? ${harryBook}`);
} else {
    console.log("Book not found.");
}

