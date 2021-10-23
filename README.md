# Project Video Discription

Click here :- https://youtu.be/3qW3cziPDQs

# ProductAPI
This is project is created to Demonstrate the CRUP operation on Product
Introduction

The API’s are build for Product and Category CRUD operations. The restfull API’s are build on MVC architecture. The task which are done on this project are:

- **create should create the product and category.**
- **read should read particular record from the product table (if product has any category then category should be fetched in the response).**
- **readAll should read all the records from the product table (if product has any category then category should be fetched in the response).**
- **update should update one particular record of the product.**
- **delete should delete one particular record of the product.**



Modules Description
-	Models :- in this folder all the  database schema are created 
-	Controller :- In this all the functionalities for routes will be handelled.
-	Routes :- In this all the routes information are given 
-	App.js:- All the database connection and to handle all the middleware. 
-	Test :- this will test the basic API operations.
 
Data Models
 





Usage
- npm install
- npm start
- setup mongodb
- Create db product
- Create the test // install mocha,chai,chai-http

API’s Description
Product API’s Description
Create product
1.	http://localhost:3000/api/product/create

Using this endpoint User can create the product. User need to provide this type of data.
 
In category user should pass the object id of Category
Read Single product
2.	http://localhost:3000/api/product/read/:id
We can read the single product from the DB in the route we have to provide the id of the product which we want to read

This is the type of data we will get after reading single product
 

     
3.	Update Product
http://localhost:3000/api/product/update/:id
This API can be used to update the product 
 
Here we can change any of the field to be updated.



4.	Read All The products
http://localhost:3000/api/product/read
With This route we can list all the products
Sample 
 


5.	Remove the product by Id

It will delete the product by id given in url 
http://localhost:3000/api/product/delete/:id

Sample response:

 

6.	Create Category:
http://localhost:3000/api/category/create
So category is referenced by the product to display the type to category the product belong 
We should provide the category in json format like 
{
    "name" : "book"
}

Response will be generated like:

{
    "name": "games",
    "_id": "617398dce07480115639168f",
    "createdAt": "2021-10-23T05:08:44.280Z",
    "updatedAt": "2021-10-23T05:08:44.280Z",
    "__v": 0
}




Testing
So the  unit testing testing is done on all the 6 routes 
1.	http://localhost:3000/api/product/create
2.	http://localhost:3000/api/product/read/:id
3.	http://localhost:3000/api/product/update/:id
4.	http://localhost:3000/api/product/read
5.	http://localhost:3000/api/product/delete/:id
6.	http://localhost:3000/api/category/create

For testing use the command npm test
The result will be shown like this
All product
    GET ALL PRODUCT
DB Connected
      ✔ it should get all the products (43ms)

  get single product
    GET  PRODUCT BY ID
      ✔ it should get  the product

  post product
    POST  PRODUCT
{
  name: 'toy',
  price: 100,
  quantit: 10,
  category: '6172cd2e7dd84154752a27a9',
  discontinued: true
}
      ✔ it should post the products

  post product
    POST  PRODUCT
      ✔ it should update the products

  remove single product
    REMOVE  PRODUCT BY ID
      ✔ it should remove  the product

  post category
    POST  CATEGORY
{ name: 'book' }
      ✔ it should post the Category

