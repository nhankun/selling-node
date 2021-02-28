const mysql = require('mysql2');
const config = require("../config/app");

module.exports = {
    connectionMysql: mysql.createPool(config.db.mysql),
    get: async (sql, params)=>{
        const connection = mysql.createPool(config.db.mysql);
        return new Promise((resolve, reject)=>{
            connection.query(sql, params,  (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    }
}