import express from "express";
import { bookRouter } from "./routes/book.routes.js";
import cors from "cors";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bookRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});