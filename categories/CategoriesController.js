const express = require('express');
const router = express.Router();
//carrego o model de categoria
const category = require('./Category');
//carrego o slugify
const slugify = require('slugify');

router.get("/admin/categories/new",(req, res) => {
    res.render("admin/categories/new");
});

router.post("/categories/save", (req, res) => {
    var title = req.body.title;
    if(title != undefined){
        
        category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/");
        })

    }else{
        res.redirect("/admin/categories/new");
    }
});

router.get("/admin/categories",  (req, res) => {
    category.findAll().then(categories => {
        res.render("admin/categories/index", {categories: categories});
    });
});

router.post("/categories/delete", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/categories");
            });
        }else{// NÃO FOR UM NÚMERO
            res.redirect("/admin/categories");
        }
    }else{ // NULL
        res.redirect("/admin/categories");
    }
});

module.exports = router;