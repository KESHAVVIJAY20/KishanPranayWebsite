const BookDescPageContent = require('../models/bookdescpagecontent');
exports.BookDescpage = async (req, res) => {
    try{
        const content = await BookDescPageContent.findOne();
        res.render('bookdesc',content);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal error");
    }

}

exports.setBookDescPage = async (req,res)=>{
    try{
        let body = req.body;
        await BookDescPageContent.deleteMany({});
        let bookdescPageContent = new BookDescPageContent(body);
        await bookdescPageContent.save();
        res.send("successfully added");
    }catch (err){
        console.error(err);
        res.status(500).send("Internal error");
    }

}