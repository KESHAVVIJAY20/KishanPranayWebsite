const mongoose = require('mongoose');

const HomePageContentSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    titleIcon : {
        type : String,
    },
    bg_image : {
        type : String,
    },
    home_bg_image : {
        type : String,
    },
    frontBook : {
        type: String,
    },
    logo : {
        type : String,
    },
    releaseBy : {
        type: String,
    },
    frontTextTitle : {
        type : String,
    },
    frontTextTitleAbout : {
        type : String,
    },
    frontPageBottomButton : {
        type : String,
    },
    AuthorName : {
        type : String,
    },
    AuthorTitle : {
        type : String,
    },
    AuthorFeaturedOn : {
        type : String,
    },
    AuthorFeaturedOnImg1 : {
        type : String,
    },
    AuthorFeaturedOnImg2 : {
        type : String,
    },
    AuthorFeaturedOnImg3 : {
        type : String,
    },
    AuthorFeaturedOnImg4 : {
        type : String,
    },
    AuthorFeaturedOnImg5 : {
        type : String,
    },
    AuthorTitleDesc : {
        type : String,
    },
    section1FormHeading1 : {
        type : String,
    },
    section1FormHeading2 : {
        type : String,
    },
    section1FormImage : {
        type : String,
    },
    section2heading : {
        type : String
    },
    section2heading1 : {
        type : String,
    },
    section2Book1 : {
        type : String,
    },
    section2Book1AboutTitle : {
        type : String,
    },
    section2Book2 : {
        type : String,
    },
    section2Book2AboutTitle : {
        type : String,
    },
    section2Book3 : {
        type : String,
    },
    section2Book3AboutTitle : {
        type : String,
    },
    section2Book4 : {
        type : String,
    },
    section2Book4AboutTitle : {
        type : String,
    },
    section3Image : {
        type : String,
    },
    section3ImageTitle : {
        type : String,
    },
    section3ImageAbout : {
        type : String,
    },
    section3Image1 : {
        type : String,
    },
    section3Image1Title : {
        type : String,
    },
    section3Image1About : {
        type : String,
    },
    section3Image2 : {
        type : String,
    },
    section3Image2Title : {
        type : String,
    },
    section3Image2About : {
        type : String,
    },
    section4AuthorAboutTitle : {
        type : String,
    },
    section4AuthorAbout : {
        type : String,
    },
    section4AuthorImage : {
        type : String,
    },
    section4AuthorImage1 : {
        type : String,
    },
    section5Title: {
        type : String,
    },
    section5Title1: {
        type : String,
    },
    section5SubTitle: {
        type : String,
    },
    section5SubTitleDesc: {
        type : String,
    },
    section5SubTitleDescBy: {
        type : String,
    },
    section6Title: {
        type : String,
    },
    section6Title1: {
        type : String,
    },
    section6Card1Img: {
        type : String,
    },
    section6Card1ImgTitle: {
        type : String,
    },
    section6Card1ImgAbout: {
        type : String,
    },
    section6Card2Img1: {
        type : String,
    },
    section6Card2Img1Title: {
        type : String,
    },
    section6Card2Img1About: {
        type : String,
    },
    section6Card3Img2: {
        type : String,
    },
    section6Card3Img2Title: {
        type : String,
    },
    section6Card3Img2About: {
        type : String,
    },
    section7Heading: {
        type : String,
    },
    section7Img: {
        type : String,
    },
    section7ImgTitle: {
        type : String,
    },
    section7Img1: {
        type : String,
    },
    section7Img1Title: {
        type : String,
    },
    section7Img2: {
        type : String,
    },
    section7Img2Title: {
        type : String,
    },
    section7Button: {
        type : String,
    },

});

module.exports = mongoose.model('HomePageContent', HomePageContentSchema);
