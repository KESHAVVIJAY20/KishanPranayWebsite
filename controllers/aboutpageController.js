const AboutPageContent = require('../models/aboutpagecontent');
exports.Aboutpage = async (req, res) => {
    try{
        const content = await AboutPageContent.findOne();
        res.render('about',content);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal error");
    }

}

exports.setAboutPage = async (req,res)=>{
    try{
        let body = req.body;
        await AboutPageContent.deleteMany({});
        let aboutPageContent = new AboutPageContent(body);
        await aboutPageContent.save();
        res.send("successfully added");
    }catch (err){
        console.error(err);
        res.status(500).send("Internal error");
    }

}