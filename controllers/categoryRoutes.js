
const Category = require('../models/category')

exports.create = (req,res)=>{
    var productField = req.body
    console.log(productField)
    var category = new Category(productField);
    category.save((err,data)=>{

        if (err) {
            console.log(err)
            return res.status(400).json({
                error: "error in saving "
            });
        }
        else
        {
            res.json(data);
        }
    })
}

