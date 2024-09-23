import { Router } from "express";
import { allBooks, createBook, deleteBook, searchBook, searchBookGenre, updateBook } from "../controller/book.controller.js";

const bookRouter = Router();

bookRouter.post("/book", (req, res) => {
  const { title, author, pag, genre, date_publication } = req.body;

  const newBook = createBook(title, author, pag, genre, date_publication);
  res.status(200).json({ newBook });
});

bookRouter.delete("/book/:id", (req, res) => {
  const { id } = req.params;
  const book = deleteBook(id);
  res.status(200).json({ book });
});

bookRouter.put("/book/edit/:id", (req, res) => {
  const { id } = req.params; 
  const { title, author, pag, genre } = req.body;
  
  const editBook = updateBook(id, title, author, pag, genre);

  if(editBook) {
    res.status(200).json(editBook);
  } else {
    res.status(404).json({message: "Não foi possivel editar o livro"})
  }
})

bookRouter.get("/book", async (req, res) => {
  try {
    const getAllBooks = await allBooks(); // Aguarde a função se for assíncrona
    res.json(getAllBooks); // Retorne diretamente o array
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
});


bookRouter.get("/book/title/:title", (req, res) => {
  const { title } = req.params; // Corrigido para usar req.params

  if (!title) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  const listSearchBook = searchBook(title);
  res.status(200).json(listSearchBook);
});


bookRouter.get("/book/genre/:genre", (req, res) => {
  const { genre } = req.params; // Corrigido para 'genre' de acordo com a rota

  if (!genre) {
    return res.status(400).json({ error: "Gênero não fornecido" });
  }

  const genreBookList = searchBookGenre(genre); // Busca baseada no gênero fornecido
  if (genreBookList.length === 0) {
    return res.status(404).json({ error: "Nenhum livro encontrado para esse gênero" });
  }

  res.status(200).json(genreBookList);
});



export { bookRouter };
