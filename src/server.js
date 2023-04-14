require("dotenv").config();
require("./db/connection");

const express = require("express");

const Book = require("./books/model");

const app = express();

app.use(express.json());

app.get("/books/getallbooks", async (req, res) => {
  try {
    console.log(req);
    const books = await Book.find({});

    const successResponse = {
      message: "success",
      books: books,
    };

    res.status(200).json(successResponse);
  } catch (error) {
    console.log(error);
  }
});

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

// const myFunc = (key, value) => {
//   return {
//     [key]: value,
//   };
// };

// myFunc("genre", "fantasy");

// {
//   genre: "fantasy";
// }

// {
//   author: "beth";
// }
// {
//   genre: "action";
// }

app.put("/books/updatebook", async (req, res) => {
  // const updatedBook = await Book.findOneAndUpdate(
  //   { title: req.body.title },
  //   { $set: { author: req.body.newAuthor } }
  // );

  // const book = await Book.findOne({ name: req.body.title }).toArray();

  // console.log(book);
  const updatedBook = await Book.updateOne(
    { title: req.body.title },
    { [req.body.key]: req.body.value }
  );
  res.status(202).json(updatedBook);
});

app.listen(5001, () => console.log("Server is listening"));
