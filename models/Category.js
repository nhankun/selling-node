const db = require('../config/database');

var Category={
	getAll: async function(query){
        return  await db.get(query,[]);
	},
	count: async function(){
		return await db.get("SELECT COUNT(id) AS NumberOfCategories FROM categories;")
	},
	query: async function(query){
        return  await db.get(query,[]);
	},
};
 module.exports=Category;