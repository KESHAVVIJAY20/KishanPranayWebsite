const Book = require("../models/BooksModel");

// Controller to create a new user
const createBook = async (req, res) => {
  try {
    const { title, author, genre, description, cover } = req.body;
    const newBook = new Book({title, author, genre, description, cover});
    await newBook.save();
    res.status(201).json({ message: "Book Created Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating book", error });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    // console.log(books);
    res.render("Admin", { books });
  } catch (error) {
    console.error("Error fetching books:", error); // Log error to console
    res.status(500).json({ message: "Error fetching books", error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const result = await Book.findByIdAndDelete(bookId);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Respond with success message
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Error deleting book", error });
  }
};

const updateBook = async (req, res) => {
  try {
    console.log(`Fetching book with ID: ${req.params.id}`);
    const bookId = req.params.id;
    const { title, author, genre, description, cover } = req.body;
    console.log('Received data:', {  title, author, genre, description, cover });
    const book = await Book.findByIdAndUpdate(
      bookId,
      { title, author, genre, description, cover },
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ message: "book not found" });
    }
    console.log('Book found:', book);
    res.status(200).json({ message: "Book updated successfully", book });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Error updating book", error });
  }
};

module.exports = {
  createBook,
  getBooks,
  deleteBook,
  updateBook,
};
