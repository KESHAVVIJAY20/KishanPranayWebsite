const mongoose = require('mongoose');

const AboutPageContentSchema = new mongoose.Schema({
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
    section1Content : {
        type:String,
    },
    section2Heading : {
        type : String,
    },
    section2Title : {
        type : String,
    },
    section2Book1 : {
        type : String,
    },
    section2Book1Title : {
        type : String,
    },
    section2Book2 : {
        type : String,
    },
    section2Book2Title : {
        type : String,
    },
    section2Book3 : {
        type : String,
    },
    section2Book3Title : {
        type : String,
    },
    section2Book4 : {
        type : String,
    },
    section2Book4Title : {
        type : String,
    },
    section2Book5 : {
        type : String,
    },
    section2Book5Title : {
        type : String,
    },
    section2Book6 : {
        type : String,
    },
    section2Book6Title : {
        type : String,
    },
    section2Book7 : {
        type : String,
    },
    section2Book7Title : {
        type : String,
    },
    section2Book8 : {
        type : String,
    },
    section2Book8Title : {
        type : String,
    },
});

module.exports = mongoose.model('AboutPageContent', AboutPageContentSchema);
