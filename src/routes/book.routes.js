import { Router } from "express";
import { allBooks, createBook, deleteBook, searchBook, searchBookGenre, updateBook } from "../controller/book.controller.js";

const bookRouter = Router();

bookRouter.post("/book", (req, res) => {
  const { title, author, qtdPage, genre } = req.body;

  const newBook = createBook(title, author, qtdPage, genre);
  res.status(200).json({ newBook });
});

bookRouter.delete("/book/:id", (req, res) => {
  const { id } = req.params;
  const book = deleteBook(id);
  res.status(200).json({ book });
});

bookRouter.put("/book/edit/:id", (req, res) => {
  const { id } = req.params; 
  const { title, author, qtdPage, genre } = req.body;
  
  const editBook = updateBook(id, title, author, qtdPage, genre);

  if(editBook) {
    res.status(200).json(editBook);
  } else {
    res.status(404).json({message: "Não foi possivel editar o livro"})
  }
})

bookRouter.get("/book", (req, res) => {
  const getAllBooks = allBooks();
  res.json({ getAllBooks });
});

bookRouter.get("/book/title", (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  const listSearchBook = searchBook(title);
  res.status(200).json(listSearchBook);
});

bookRouter.get("/book/genre/:genreBook", (req, res) => {
  const { genreBook } = req.params;

  const genreBookList = searchBookGenre(genreBook);
  res.status(200).json(genreBookList);
});

export { bookRouter };
