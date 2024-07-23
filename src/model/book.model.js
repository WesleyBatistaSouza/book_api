import { v4 as uuid } from "uuid";

export class Book {
  constructor(title, author, pag = false, genre) {
    this.id = uuid();
    this.title = title;
    this.autor = author;
    this.pag = pag;
    this.genre = genre;
  }
}