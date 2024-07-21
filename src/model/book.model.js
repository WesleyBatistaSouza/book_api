import { v4 as uuid } from "uuid";

export class Book {
  constructor(title, author, qtdPage, available = false, genre) {
    this.id = uuid();
    this.title = title;
    this.autor = author;
    this.pag = qtdPage;
    this.available = available;
    this.genre = genre;
  }
}