const categoryService = require("../../services/categoryService");
const helper = require('../../services/helper');
const params = require('../../config/parameters');

module.exports = {
    getAll:async (req, res)=>{
        try {
            let parameters = helper.getParameters(req, params.categories);
            console.log(`[DEBUG] ${JSON.stringify(parameters)}`);
            let data = await categoryService.getAll(parameters, req); 

            if (!req.xhr) {
                res.render("admins/categories/index",{data:data.data, pages:data.pages});
            } else {
                var renderedViews = {};
                res.render('admins/categories/table', { data: data.data}, function (err, html) {
                    renderedViews.searchResults = html;

                    res.render('./pagination', { paginator: data.pages }, function (err, html) {
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