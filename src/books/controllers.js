const Book = require("./model");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    res.status(200).json({ message: "success", books: books });
  } catch (error) {
    console.log(error);
  }
};

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create({
      author: req.body.author,
      genre: req.body.genre,
      title: req.body.title,
    });

    res.status(201).json({ message: "success", newBook: newBook });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllBooks,
  addBook,
};
