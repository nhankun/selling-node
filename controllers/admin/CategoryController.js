const categoryRepository = require("../../repositories/admin/CategoryRepository");

module.exports = {
    getAll:async (req, res)=>{
        let categories = {}
        try {
            categories = await categoryRepository.getAll(req, res);     
        } catch (error) {
            console.log("[ERROR] CategoryController: "+error);
        }           
        res.render("admins/categories/index",{categories:categories});
    }
}