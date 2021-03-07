const categoryRepository = require("../../repositories/admin/CategoryRepository");
const pagina = require('../../services/pagination');
const helper = require('../../services/helper');
const params = require('../../config/parameters');

module.exports = {
    getAll:async (req, res)=>{
        let categories = {}
        try {
            let parameters = helper.getParameters(req, params.categories);
            console.log(`[DEBUG] ${JSON.stringify(parameters)}`);
            categories = await categoryRepository.getAll(parameters, req, res); 
            
            let pages = pagina.pagination(categories)

            if (!req.xhr) {
                res.render("admins/categories/index",{data:categories, pages:pages});
            } else {
                var renderedViews = {};
                res.render('admins/categories/table', { data: categories.categories}, function (err, html) {
                    renderedViews.searchResults = html;

                    res.render('./pagination', { paginator: pages }, function (err, html) {
                        renderedViews.pagination = html;

                        res.json(renderedViews);
                    });
                });
            }
            // console.log(pages);
            
        } catch (error) {
            console.log("[ERROR] CategoryController: "+error);
        }
    }
}