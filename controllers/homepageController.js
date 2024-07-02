const HomePageContent = require('../models/homepagecontent');
exports.homepage = async (req, res) => {
    try{
        const content = await HomePageContent.findOne();
        res.render('index',content);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal error");
    }

}

exports.setHomePage = async (req,res)=>{
    try{
        let body = req.body;
        await HomePageContent.deleteMany({});
        let homePageContent = new HomePageContent(body);
        await homePageContent.save();
        res.send("successfully added");
    }catch (err){
        console.error(err);
        res.status(500).send("Internal error");
    }

}