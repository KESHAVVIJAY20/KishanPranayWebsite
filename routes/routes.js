const express = require('express');
const homepageController = require("../controllers/homepageController");
const bookspageController = require("../controllers/bookspageController");
const aboutpageController = require("../controllers/aboutpageController");
const contactpageController = require("../controllers/contactpageController");
const articlespageController = require("../controllers/articlespageController");
const bookdescController = require("../controllers/bookdescController");
const Book = require("../models/BooksModel");
const { createUser, deleteUser, updateUser} = require('../controllers/userController');
const { createBook, deleteBook,updateBook, getBooks} = require('../controllers/bookController');
const router = express.Router();

// Define a route for the home page
router.get('/', (req, res) => {
    homepageController.homepage(req, res);
});
// router.get('/books', (req, res) => {
//     bookspageController.Bookspage(req, res);
// });
// router.get('/addBooks', (req, res) => {
//     bookspageController.Bookspage(req, res);
// });
router.get('/about', (req, res) => {
    aboutpageController.Aboutpage(req, res);
});
router.get('/contact', (req, res) => {
    contactpageController.Contactpage(req, res);
});
router.get('/articles', (req, res) => {
    articlespageController.Articlespage(req, res);
});
router.get('/bookdesc', (req, res) => {
    bookdescController.BookDescpage(req, res);
});

// router.get('/admin/add-book', (req, res) => {
//   res.render('admin_add_books');
// });
// router.get('/books', async (req, res) => {
//   const books = await Book.find().sort({ dateCreated: -1 });
//   res.render('books', { books });
// });
router.get('/books', async (req, res) => {
  try {
      const allBooks = await Book.find().sort({ dateCreated: -1 }); // Optionally sort all books by date
      res.render('books', { books: allBooks });
  } catch (error) {
      console.error('Error fetching all books:', error);
      res.render('books', { books: [] }); // Pass an empty array to handle errors gracefully
  }
});



router.get('/', async (req, res) => {
  try {
      // Fetch the latest 3 books based on `dateCreated`
      const latestBooks = await Book.find().sort({ dateCreated: -1 }).limit(3);
      console.log('Fetched latest books:', latestBooks); // Log the books to check data
      res.render('index', { books: latestBooks });
  } catch (error) {
      console.error('Error fetching latest books:', error);
      res.render('index', { books: [] }); // Pass an empty array to handle errors gracefully
  }
});
;




router.post('/admin/add-book', async (req, res) => {
  const { title, author, genre, description, cover } = req.body;
  const book = new Book({ title, author, genre, description, cover });
  await book.save();
  res.redirect('/books');
});



// Define a route for the about page

router.post("/updateHomePage",(req,res)=>{
  homepageController.setHomePage(req,res);
});
router.post("/updateBooksPage",(req,res)=>{
  bookspageController.setBooksPage(req,res);
});
router.post("/updateAboutPage",(req,res)=>{
  aboutpageController.setAboutPage(req,res);
});
router.post("/updateContactPage",(req,res)=>{
  contactpageController.setContactPage(req,res);
});
router.post("/updateArticlesPage",(req,res)=>{
  articlespageController.setArticlesPage(req,res);
});
router.post("/updateBookDescPage",(req,res)=>{
  bookdescController.setBookDescPage(req,res);
});
router.delete('/admin/:id', deleteUser);
router.post('/users', createUser);
router.put('/admin/:id', updateUser);
router.delete('/admin/book/:id', deleteBook);
router.post('/books', createBook);
router.post('/admin/book/edit/:id', updateBook);
// router.get('/getBooks',getBooks);

module.exports = router;

