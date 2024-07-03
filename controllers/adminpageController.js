const AdminPageContent = require('../models/adminpagecontent');
exports.Adminpage = async (req, res) => {
    try{
        const content = await AdminPageContent.findOne();
        res.render('admin',content);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal error");
    }

}