const ArticlesPageContent = require('../models/articlespagecontent');
exports.Articlespage = async (req, res) => {
    try{
        const content = await ArticlesPageContent.findOne();
        res.render('articles',content);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal error");
    }

}

exports.setArticlesPage = async (req,res)=>{
    try{
        let body = req.body;
        await ArticlesPageContent.deleteMany({});
        let aboutPageContent = new ArticlesPageContent(body);
        await aboutPageContent.save();
        res.send("successfully added");
    }catch (err){
        console.error(err);
        res.status(500).send("Internal error");
    }

}