const db = require('../config/database');

var Category={
	getAll: async function(){
        return  await db.get("Select * from categories",[]);
	}
};
 module.exports=Category;