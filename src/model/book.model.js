import { v4 as uuid } from "uuid";

export class Book {
  constructor(title, author, pag = false, genre, date_publication) {
    this.id = uuid();
    this.title = title;
    this.author = author;
    this.pag = pag;
    this.genre = genre;
    this.date_publication = date_publication;
  }
}