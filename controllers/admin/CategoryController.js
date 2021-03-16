const categoryService = require("../../services/admin/categoryService");
const helper = require('../../services/helper');
const params = require('../../config/parameters');
const formidable = require('formidable');
const categoryRequest = require('../../requests/admins/categoryRequest');
const storage = require('../../config/storage');

module.exports = {
    getAll:async (req, res) => {
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
    },
    create:async (req, res) => {
        res.render("admins/categories/create");
    },
    store:async (req, res) => {
        // const form = formidable({ multiples: true });
        // form.parse(req, async (err, fields, files) => {
        //     if (err) {
        //     //   next(err);
        //     //   return;
        //         console.log(err);
        //     }
        //     let {name, properties} = fields;
        //     let {icon, banner} = files;

        //     parameters = {name: name, banner: banner, icon: icon, properties: properties};
        //     const validCategory = await categoryRequest.validation(parameters, res)

        //     // console.log(parameters);
        //     if (helper.isEmpty(validCategory) != true){
        //         res.status(422).json({status: 422, data: validCategory})
        //     }else{
                let uploadFile = storage.uploadFile;
                uploadFile(req, res, (error) => {
                    // Nếu có lỗi thì trả về lỗi cho client.
                    // Ví dụ như upload một file không phải file ảnh theo như cấu hình của mình bên trên
                    if (error) {
                      return res.send(`Error when trying to upload: ${error}`);
                    }
                    console.log(req.file);
                res.json({ status:200, data: {} });   
                })
        //     }
        //   });
    }
}