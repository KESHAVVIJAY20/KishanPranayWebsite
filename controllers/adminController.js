const User = require('../models/usermodel');
const Book = require('../models/BooksModel');

const getAdminPage = async (req, res) => {
  try {
    const users = await User.find({});
    const books = await Book.find({});
    res.render('Admin', { users, books });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { getAdminPage };
