const BooksPageContent = require('../models/bookspagecontent');
exports.Bookspage = async (req, res) => {
    try{
        const content = await BooksPageContent.findOne();
        res.render('books',content);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal error");
    }

}

exports.setBooksPage = async (req,res)=>{
    try{
        let body = req.body;
        await BooksPageContent.deleteMany({});
        let booksPageContent = new BooksPageContent(body);
        await booksPageContent.save();
        res.send("successfully added");
    }catch (err){
        console.error(err);
        res.status(500).send("Internal error");
    }

}