const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


// creating product schema having name , quntity , price , category , discontinued 
// ProductId will be automatically created by mongoose in MongoDb
// timestamp is added to know the product creation as well as updated time.


const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
       
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        category: {
            type: ObjectId,
            ref: "Category",
            require:true
            
        },
        quantity: {
            type: Number
        },
       
        discontinued : {
            type: Boolean
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
