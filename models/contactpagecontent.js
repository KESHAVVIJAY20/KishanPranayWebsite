const mongoose = require('mongoose');

const ContactPageContentSchema = new mongoose.Schema({
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
    AuthorName : {
        type : String,
    },
    AuthorTitle : {
        type : String,
    },
    section1FormHeading : {
        type : String,
    },
    section1Title1 : {
        type : String,
    },
    section1SubTitle1 : {
        type : String,
    },
    section1Button1 : {
        type : String,
    },
    section1Title2 : {
        type : String,
    },
    section1SubTitle2 : {
        type : String,
    },
    section1Button2 : {
        type : String,
    },
    AuthorImage : {
        type : String,
    },
});

module.exports = mongoose.model('ContactPageContent', ContactPageContentSchema);
