import express from "express";
import { bookRouter } from "./routes/book.routes.js";
const app = express();
const port = 3000;

app.use(express.json());

app.use(bookRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
