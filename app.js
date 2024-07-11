const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const dotenv = require('dotenv');
dotenv.config();

const routes = require('./routes/routes');
const { createUser } = require('./controllers/userController');
const { createBook } = require('./controllers/bookController');
const {getAdminPage} = require('./controllers/adminController');
mongoose.connect('mongodb://localhost:27017/kishan_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
// Use routes

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.set('view engine', 'pug');
app.use('/admin', getAdminPage);
app.use('/api',createUser)
// app.use('/admin', getBooks);
app.use('/bookapi',createBook);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
