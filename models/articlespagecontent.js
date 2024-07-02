const mongoose = require('mongoose');

const ArticlesPageContentSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    titleIcon : {
        type : String,
    },
    logo : {
        type : String,
    },
    frontTitle : {
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
    section1Content: {
        type : String,
    },
    section1Card1Img:{
        type : String,
    },
    section1Card2Img:{
        type : String,
    },
    section1Card3Img:{
        type : String,
    },
    section1Card4Img:{
        type : String,
    },
    section1Card5Img:{
        type : String,
    },
    section1Card6Img:{
        type : String,
    },
    section1Card1Title:{
        type : String,
    },
    section1Card2Title:{
        type : String,
    },
    section1Card3Title:{
        type : String,
    },
    section1Card4Title:{
        type : String,
    },
    section1Card5Title:{
        type : String,
    },
    section1Card6Title:{
        type : String,
    },
    section1Card1SubTitle:{
        type : String,
    },
    section1Card2SubTitle:{
        type : String,
    },
    section1Card3SubTitle:{
        type : String,
    },
    section1Card4SubTitle:{
        type : String,
    },
    section1Card5SubTitle:{
        type : String,
    },
    section1Card6SubTitle:{
        type : String,
    },
    section1CardButton:{
        type : String,
    },
    section1FooterText : {
        type : String,
    },
    section2Heading: {
        type : String,
    },
});

module.exports = mongoose.model('ArticlesPageContent', ArticlesPageContentSchema);
