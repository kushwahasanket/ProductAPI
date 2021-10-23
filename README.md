# Project Video Discription

[Click here](https://youtu.be/3qW3cziPDQs)

# ProductAPI
This is project is created to Demonstrate the CRUP operation on Product
Introduction

The API’s are build for Product and Category CRUD operations. The restfull API’s are build on MVC architecture. The task which are done on this project are:

- **create should create the product and category.**
- **read should read particular record from the product table (if product has any category then category should be fetched in the response).**
- **readAll should read all the records from the product table (if product has any category then category should be fetched in the response).**
- **update should update one particular record of the product.**
- **delete should delete one particular record of the product.**

# Data Modal
![Data Modal](https://drive.google.com/uc?export=view&id=1cXyMBrBT7HMo8fvpvSO9OWoqgn1-Q4HN)

# Modules Description
-	Models :- in this folder all the  database schema are created 
-	Controller :- In this all the functionalities for routes will be handelled.
-	Routes :- In this all the routes information are given 
-	App.js:- All the database connection and to handle all the middleware. 
-	Test :- this will test the basic API operations.
 

# Usage
- npm install
- npm start
- setup mongodb
- Create db product
- Create the test // install mocha,chai,chai-http

# API’s Description
Product API’s Description
## Create product
>	http://localhost:3000/api/product/create

> Using this endpoint User can create the product. User need to provide this type of data.

> In category user should pass the object id of Category

![Data Modal](https://drive.google.com/uc?export=view&id=1Y9UBnc7eYDAq0GAAxwHPzwVtysyXxTED)

## Read Single product	
> http://localhost:3000/api/product/read/:id

>We can read the single product from the DB in the route we have to provide the id of the product which we want to read

>This is the type of data we will get after reading single product

![](https://drive.google.com/uc?export=view&id=1NjWPVWNnr-HILbLJ7wxGBhXJjgboKOz7)
     
## Update Product
> http://localhost:3000/api/product/update/:id

> This API can be used to update the product 

![](https://drive.google.com/uc?export=view&id=1-tqKJjomhQpo99HVDnEq08pIHGTZupk6)
 
> Here we can change any of the field to be updated.

## Read All The products
> http://localhost:3000/api/product/read

> With This route we can list all the products Sample 

![](https://drive.google.com/uc?export=view&id=1-tqKJjomhQpo99HVDnEq08pIHGTZupk6)
 


## Remove the product by Id

> It will delete the product by id given in url 

> http://localhost:3000/api/product/delete/:id

 

##	Create Category:
> http://localhost:3000/api/category/create

> So category is referenced by the product to display the type to category the product belong 

> We should provide the category in json format like 


```
{
    "name" : "book"
}
```

Response will be generated like:
```
{
    "name": "games",
    "_id": "617398dce07480115639168f",
    "createdAt": "2021-10-23T05:08:44.280Z",
    "updatedAt": "2021-10-23T05:08:44.280Z",
    "__v": 0
}
```




# Testing
So the  unit testing testing is done on all the 6 routes 
1.	http://localhost:3000/api/product/create
2.	http://localhost:3000/api/product/read/:id
3.	http://localhost:3000/api/product/update/:id
4.	http://localhost:3000/api/product/read
5.	http://localhost:3000/api/product/delete/:id
6.	http://localhost:3000/api/category/create

> For testing use the command npm test
### The result will be shown like this

![](https://drive.google.com/uc?export=view&id=1AAOk0tbdpJ9CTJU7Jk0SPUkvDrGsKVK1)
![](https://drive.google.com/uc?export=view&id=11muucCHmhiM9iqq5j7qTXL-HqwUxdgke)

