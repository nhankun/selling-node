const Category = require("../../models/Category");

 async function buildQuery(query, parameters){
    if (typeof parameters.search !== "undefined" && parameters.search !== '')
        query += " where name LIKE '%"+parameters.search+"%'";

    if (typeof parameters.status !== "undefined" && parameters.status !== ""){
        if (typeof parameters.search !== "undefined" && parameters.search !== '')
            query += " AND status = "+parameters.status;
        if (typeof parameters.search === "undefined" || parameters.search == '')
            query += " where status = "+parameters.status;
    }

    return query;
}

module.exports = {
    getAll: async (parameters)=>{
        let query = "Select * from categories";        
        query = await buildQuery(query,parameters);
        if (typeof parameters.from !== "undefined" && typeof parameters.size !== "undefined")
            query += " LIMIT "+parameters.from+", "+parameters.size;

		console.log(`[LOG] ${query}`);
        let categories = await Category.getAll(query);
        
        return  categories;
    },
    count: async (parameters) =>{
        let query = "Select id from categories";

        query = await buildQuery(query, parameters);
            
		console.log(`[LOG] ${query}`);
        let totalData = await Category.query(query);
        totalData = totalData.length;
        
        return totalData;
    }
}