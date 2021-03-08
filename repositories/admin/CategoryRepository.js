const Category = require("../../models/Category");

module.exports = {
    getAll: async (parameters)=>{
        let query = "Select * from categories";

        if (typeof parameters.search !== "undefined" && parameters.search !== '')
            query += " where name LIKE '%"+parameters.search+"%'";

		if (typeof parameters.from !== "undefined" && typeof parameters.from !== "undefined")
			query += " LIMIT "+parameters.from+", "+parameters.size;
       

		console.log(`[LOG] ${query}`);
        let categories = await Category.getAll(query);
        return  categories;
    },
    count: async () =>{
        let totalData = await Category.count();
        totalData = totalData[0].NumberOfCategories
        return totalData;
    }
}