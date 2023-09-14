// Exercise 6
/* 
  [] As a challenge, design a Library class. This class should be able to store book objects.
  [] For book objects, you should have a Book class. This class should have private fields for ISBN and public fields like title, author, and yearPublished.
  [] The Library should feature methods that allow a user to add a book, remove a book, and list all books.
  [] Implement this system and run a series of operations, such as adding a book, listing books, etc. */

class Library {

}

class book {
  #ISBN;

  constructor(ISBN, title, author, yearPublished) {
    this.#ISBN = ISBN
    this.title = title
    this.author = author
    this.yearPublished = yearPublished  
  }

}

let [????] = new [?????] ("How to kill a Mockingbird")
console.log(????)