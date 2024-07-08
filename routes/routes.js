const express = require('express');
const homepageController = require("../controllers/homepageController");
const bookspageController = require("../controllers/bookspageController");
const aboutpageController = require("../controllers/aboutpageController");
const contactpageController = require("../controllers/contactpageController");
const articlespageController = require("../controllers/articlespageController");
const bookdescController = require("../controllers/bookdescController");
const { createUser, deleteUser, updateUser} = require('../controllers/userController');
const router = express.Router();

// Define a route for the home page
router.get('/', (req, res) => {
    homepageController.homepage(req, res);
});
router.get('/books', (req, res) => {
    bookspageController.Bookspage(req, res);
});
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

module.exports = router;
