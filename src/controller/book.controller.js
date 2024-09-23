import { Book } from "../model/book.model.js";
import fs from "fs";
import path from "path";

const fileBook = path.resolve("books.json");

// Função para carregar livros do arquivo
export function loadBooks() {
  try {
      const bookData = fs.readFileSync(fileBook, "utf8");
      const parsedData = JSON.parse(bookData);
      
      // Verifique se o dado carregado é um array
      if (Array.isArray(parsedData)) {
          return parsedData;
      } else {
          console.error("O conteúdo do arquivo não é um array");
          return []; // Retorna um array vazio se o conteúdo não for um array
      }
  } catch (error) {
      console.error("Erro ao ler o arquivo:", error);
      return []; // Retorna um array vazio em caso de erro
  }
}

// Função para salvar livros no arquivo
export function saveBooks(books) {
    try {
        fs.writeFileSync(fileBook, JSON.stringify(books, null, 2));
    } catch (error) {
        console.error("Erro ao escrever no arquivo:", error);
    }
}

// Carrega a lista de livros
const listBook = loadBooks();

// Função para criar um novo livro
export function createBook(title, author, pag, genre, date_publication) {
    const newBook = new Book(title, author, pag, genre, date_publication);
    listBook.push(newBook);
    saveBooks(listBook);
    return newBook;
}

export function updateBook(id, title, author, pag, genre, date_publication) {
    const bookIndex = listBook.findIndex((book) => book.id === id);

    if (bookIndex !== -1) {
        listBook[bookIndex] = { ...listBook[bookIndex], title, author, pag, genre, date_publication };
        saveBooks(listBook);
        return listBook[bookIndex];
    }
    return null;
}

export function searchBook(title) {
    const bookTitle = listBook.find((book) => book.title === title);
    return bookTitle ? bookTitle : { message: "Não existe em nosso banco um livro com este título" };
}

export function searchBookGenre(genre) {
    const bookGenre = listBook.filter((book) => book.genre === genre);
    return bookGenre.length > 0 ? bookGenre : { message: "Não existem livros com este gênero em nosso banco de dados" };
}

// Função para retornar todos os livros
export const allBooks = () => {
    return listBook;
};

export const deleteBook = (id) => {
    const bookExist = listBook.find((book) => book.id == id);
    if (bookExist) {
        const indexBook = listBook.findIndex((book) => book.id == id);
        listBook.splice(indexBook, 1);
        saveBooks(listBook); // Salva a lista de livros após a exclusão
        return bookExist; // Retorna o livro que foi deletado
    } else {
        return { message: "O ID do livro desejado não existe" }; // Mensagem de erro se o livro não for encontrado
    }
};
