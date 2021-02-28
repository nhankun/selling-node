const Category = require("../../models/Category");

module.exports = {
    getAll: async (req, res)=>{
        return  await Category.getAll();
    }
}