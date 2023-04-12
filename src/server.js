require("dotenv").config();
require("./db/connection");

const express = require("express");

const Book = require("./books/model");

const app = express();

app.use(express.json());

app.post("/books/addbook", async (req, res) => {
  try {
    const newBook = await Book.create({
      author: req.body.author,
      genre: req.body.genre,
      title: req.body.title,
    });

    const successResponse = {
      message: "success",
      newBook: newBook,
    };

    res.status(201).json(successResponse);
  } catch (error) {
    console.log(error);
  }
});

app.listen(5001, () => console.log("Server is listening"));
