const Category = require("../../models/Category");
const helper = require('../../services/helper');

module.exports = {
    getAll: async (parameters, req, res)=>{
        let data = {};
        let page = req.query.page || 1;
		let size = req.query.size || 2;
        let from = (page-1)*size;

        let params = {from,  page, size};

        let totalData = await Category.count();
        totalData = totalData[0].NumberOfCategories
        data.pagination = helper.pagination(req, totalData, page, size)

        let query = "Select * from categories";

        if (typeof parameters.search !== "undefined" && parameters.search !== '')
            query += " where name LIKE '%"+parameters.search+"%'";

		if (typeof params.from !== "undefined" && typeof params.from !== "undefined")
			query += " LIMIT "+params.from+", "+params.size;
       

		console.log(`[LOG] ${query}`);
        data.categories = await Category.getAll(query);
        return  data
    }
}