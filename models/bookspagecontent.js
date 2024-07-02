const mongoose = require('mongoose');

const BooksPageContentSchema = new mongoose.Schema({
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
    section1Heading : {
        type : String,
    },
    section1Title : {
        type : String,
    },
    section1Book1 : {
        type : String,
    },
    section1Book1Title : {
        type : String,
    },
    section1Book2 : {
        type : String,
    },
    section1Book2Title : {
        type : String,
    },
    section1Book3 : {
        type : String,
    },
    section1Book3Title : {
        type : String,
    },
    section1Book4 : {
        type : String,
    },
    section1Book4Title : {
        type : String,
    },
    section1Book5 : {
        type : String,
    },
    section1Book5Title : {
        type : String,
    },
    section1Book6 : {
        type : String,
    },
    section1Book6Title : {
        type : String,
    },
    section1Book7 : {
        type : String,
    },
    section1Book7Title : {
        type : String,
    },
    section1Book8 : {
        type : String,
    },
    section1Book8Title : {
        type : String,
    },
    section2Heading : {
        type : String,
    },
    section2Title : {
        type : String,
    },
    section2SubHeading : {
        type : String,
    },
    section2Content : {
        type : String,
    },
    section2ContentBy : {
        type : String,
    },
    section3Heading : {
        type : String,
    },
    section3TabImg : {
        type:String,
    },
    section3Title : {
        type : String,
    },
    section3SubTitle : {
        type : String,
    },

});

module.exports = mongoose.model('BooksPageContent', BooksPageContentSchema);
