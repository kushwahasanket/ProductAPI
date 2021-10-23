let chai = require('chai')
let server = require("../app")
let chaihttp = require('chai-http')
//var expect = require('chai')
var expect = chai.expect;

chai.should()
chai.use(chaihttp)


//add the product
describe('All product',()=>{
    describe('GET ALL PRODUCT',()=>{
        it('it should get all the products',(done)=>{
            chai.request(server)
            .get('/api/product/read')
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.an('array');
    
               done();

            })
        })
    })
})


// get products by id

describe('get single product',()=>{
    describe('GET  PRODUCT BY ID',()=>{
        it('it should get  the product',(done)=>{
            let id ="61738949d0ff103b0c5fdc56"
            chai.request(server)
            .get('/api/product/read/'+id)
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.an('object');
               done();

            })
        })
    })
})


//post the product

describe('post product',()=>{
    describe('POST  PRODUCT',()=>{
        it('it should post the products',(done)=>{
            let product = {
                
                    name : "toy",
                    price: 100,
                    quantit: 10,
                    category: "6172cd2e7dd84154752a27a9",
                    discontinued : true
                
            }
            chai.request(server)
            .post('/api/product/create')
            .send(product)
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
               done();

            })
        })
    })
})


//update the product

describe('post product',()=>{
    describe('POST  PRODUCT',()=>{
        it('it should update the products',(done)=>{
            let product = {
                
                    name : "toy",
                    price: 100,
                    quantit: 10,
                    category: "6172cd2e7dd84154752a27a9",
                    discontinued : true
                
            }
            var id  = "6172d2a97dd84154752a27ab"
            chai.request(server)
            .put('/api/product/update/'+id)
            .send(product)
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
               done();

            })
        })
    })
})

// remove the product 

describe('remove single product',()=>{
    describe('REMOVE  PRODUCT BY ID',()=>{
        it('it should remove  the product',(done)=>{
            let id ="6172b7fffd460319e4dcb256"
            chai.request(server)
           
            .get('/api/product/delete/'+id)
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.an('object');
               //expect("res").to.be("object");
               done();

            })
        })
    })
})


//add the category

describe('post category',()=>{
    describe('POST  CATEGORY',()=>{
        it('it should post the Category',(done)=>{
            let product = {
                
                    name : "book",
                    
                
            }
            chai.request(server)
            .post('/api/category/create')
            .send(product)
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
               done();

            })
        })
    })
})
