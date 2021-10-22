const mongoose = require("mongoose");


// ProductId will be automatically created by mongoose in MongoDb
const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        }
    },
    { timestamps: true }
    
);

module.exports = mongoose.model("Category", categorySchema);


