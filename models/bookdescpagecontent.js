const mongoose = require('mongoose');

const BookDescPageContentSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    titleIcon : {
        type : String,
    },
    frontTitle : {
        type : String,
    },
    logo : {
        type : String,
    },
    bgImage : {
        type:String,
    },
});

module.exports = mongoose.model('BookDescPageContent', BookDescPageContentSchema);
