const Product = require('../models/product')


//function create the product and save to the DB
exports.create = (req,res)=>{
    var productField = req.body
    console.log(productField)
    var product = new Product(productField);
    product.save((err,data)=>{

        if (err) {
            console.log(err)
            return res.status(400).json({
                error: "error in saving "
            });
        }
        else
        {
            
            res.status(200).json(data);
        }
    })
}


// function to read single product based on the id given the user
exports.readSingle = (req,res)=>{
   var id = req.params.id
   Product.findById(id).populate('category').exec((err, data)=>{
       if(err)
       {
          return res.status(400).json({
               msg: err
           })
       }
       else{
        
        res.json(data)
       }
      
   })

}

// function to read all the products
exports.readAll = (req,res)=>{
    Product.find((err,data)=>{
        if(err)
        {
            res.status(400).json({
                message: "Error in Reading data base !! :( !!) "
            })
        }
        else
        {
            res.status(200).json(data);
        }
    })
 
 }

// user can update the product based on the id 
// id can be send by the user in routes
 exports.update = (req,res)=>{
    var id = req.params.id
   Product.findOneAndUpdate(id,req.body,(err,data)=>{
    if(err)
    {
        return res.status(400).json({
            message: "!! Error in Updating data base !! :( !!) "
        })
    }
    else
    {
        res.status(200).json(data);
    }
   })
}



//function to remove the product based on id given in the url 
//id can be send by the user in routes
exports.remove = (req,res)=>{
    var id = req.params.id
    Product.findByIdAndRemove(id,(err,data)=>{
        if(err){
           return res.status(400).json({
                message : "!!cannot delete that item!!"
            })
        }
        else
        {
            res.status(200).json({
                message : "deleted succefully"
            });
        }
        
    })
}