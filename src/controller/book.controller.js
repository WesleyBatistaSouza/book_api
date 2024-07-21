import { Book } from "../model/book.model.js";

import fs from "fs";
import path from "path";

const fileBook = path.resolve("./dataBooks/books.json");

export function loadBooks() {
    try {
        const bookData = fs.readFileSync(fileBook, "utf8");
        return JSON.parse(bookData);
    } catch (error) {
        console.error("Erro ao ler o arquivo:", error);
        return [];
    }
}

export function saveBooks(books) {
    try {
        fs.writeFileSync(fileBook, JSON.stringify(books, null, 2));
    } catch (error) {
        console.error("Erro ao escrever no arquivo:", error);
    }
}

let listBook = loadBooks();

export function createBook(title, author, qtdPage, available, genre) {
  const newBook = new Book(title, author, qtdPage, available, genre);
  listBook.push(newBook);
  saveBooks(listBook)
  return listBook;
}

export function updateBook(id, title, author, qtdPage, available, genre) {
  const bookIndex = listBook.findIndex((book) => book.id === id)
  
  if(bookIndex !== -1) {
    listBook[bookIndex] = { ...listBook[bookIndex], title, author, qtdPage, available, genre };
    saveBooks(listBook);
    return listBook[bookIndex]
  }
  return null;
}

export function searchBook(title) {
  const bookTitle = listBook.find((book) => book.title == title);
  if (bookTitle) {
    return bookTitle;
  } else {
    return "Não existe em nosso banco um livro com este titulo";
  }
}

export function searchBookGenre(genre) {
  const bookGenre = listBook.filter((book) => book.genre === genre);
  if (bookGenre.length > 0) {
    return bookGenre;
  } else {
    return "Não existem livros com este gênero em nosso banco de dados";
  }
}

export const allBooks = () => {
  return listBook;
};

export const deleteBook = (id) => {
  const bookExist = listBook.find((book) => book.id == id);
  if (bookExist) {
    let indexBook = listBook.findIndex((book) => book.id == id);
    listBook.splice(indexBook, 1);
    saveBooks();
    return bookExist;
  } else {
    return "o ID do livro desejado não existe";
  }
};
