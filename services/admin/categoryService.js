const helper = require('../helper');
const CategoryRepository = require('../../repositories/admin/CategoryRepository');
const pagina = require('../pagination');

module.exports = {
    getAll: async (parameters, req)=>{
        let result = {};
        let page = req.query.page || 1;
		let size = req.query.size || 2;
        let from = (page-1)*size;
        parameters.from = from;
        parameters.size = size;
        parameters.page = page;

        let totalData = await CategoryRepository.count(parameters);

        result.data = await CategoryRepository.getAll(parameters)
        
        let pageBuider = {};
        pageBuider.pagination = helper.pagination(req, totalData, page, size)

        result.pages = pagina.pagination(pageBuider)
        
        return  result;
    },
    store: (parameters) => {

    }
}