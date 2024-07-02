const ContactPageContent = require('../models/contactpagecontent');
exports.Contactpage = async (req, res) => {
    try{
        const content = await ContactPageContent.findOne();
        res.render('contact',content);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal error");
    }

}

exports.setContactPage = async (req,res)=>{
    try{
        let body = req.body;
        await ContactPageContent.deleteMany({});
        let contactPageContent = new ContactPageContent(body);
        await contactPageContent.save();
        res.send("successfully added");
    }catch (err){
        console.error(err);
        res.status(500).send("Internal error");
    }

}