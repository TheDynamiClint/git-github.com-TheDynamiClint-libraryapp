function Book (title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return(
        `"${this.title}", By: ${this.author}, ${this.pages} pages, read: ${this.read}.`
    )}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'no');
console.log(theHobbit.info());
