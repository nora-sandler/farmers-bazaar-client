# Farmers Bazaar  
Farmer's bazaar is created for farmers who want to sell fresh products to local shoppers. 

## Working Prototype 
 You can access a working prototype of the React app here: https://farmers-bazaar-client.vercel.app/ and Node app here: https://farmers-bazaar-api.herokuapp.com/api


## User Stories 
This app is for two types of users: a visitor and a logged-in user

#### Landing Page
* As a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it


### Register page
* As visitor 
* I want to register to the web site 
* So that I can use it.

### Login page
* As a registered user 
* I want to login to the web site 
* So that I can use it.

### Add items page
* As a registered user 
* I want to add new items(products) into my inventory list, delete items from the list and update the items in the list.
* So I can decide if I want to register.


### Item details page
* As a registered user
* I want to see details of the items including name, quantity, price.
* So I can manage them in my account.

### Item inventory page
* As a registered user
* I want to see all items I have added into the inventrory of the items.
* So I can manage them in my account.



## Screenshots 
Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/Landing_page.png)
Register Page
![Register Page](/github-images/screenshots/registration_page.png)
Login Page
![Login Page](/github-images/screenshots/Login_page.png)
Add Items Page
![Add Items Page](/github-images/screenshots/AddItem_page.png)
Items Inventory Page
![Item Details Page](/github-images/screenshots/Inventory_page.png)
Item Details Page
![Item Details Page](/github-images/screenshots/ItemDetails.png)



## Functionality 
The app's functionality includes:
* Every User has the ability to create an account
* Every User has the ability to login into the account
* Every User has the ability to add items
* Every User has the ability to save items in the inventory list
* Every User has the ability to see all added items


## Technology 
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver


## Front-end Structure - React Components Map 
*  __Index.js__ 
    * __App.js__ 
        * __LandingPage.js__ 
            * __Login.js__ 
            * __Register.js__ 
            * __NavBar.js__ 
            * __Footer.js__ 
        * __AddItems.js__
        * __ItemDetails.js__
        * __Inventory.js__


## Back-end Structure - Business Objects 
* Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)
    * farm_name,
    * street_address,
    * city,
    * state,
    * zip

* Items (database table)
    * id (auto-generated)
    * users_id, 
    * name,
    * description,
    * itemCount,
    * itemPrice,
    * img,
    * date_created


## API Documentation 
API Documentation details:
## API Overview

```text
/api
.
├── /auth
│   └── POST
│       ├── /login
├── /users
│   └── POST
│       └── /
├── /items
│   └── GET
│       ├── /
│   └── POST
│       └── /
│   └── DELETE
│       └── /:id

```

### POST `/api/auth/login`

```js
// req.body
{
    "user_name": "demo@gmail.com",
    "password": "Password1"
}

// res.body
{
  "authToken": String,
    "userId": 1
}
```

### POST `/api/users/`

```js
// req.body
{
    "id": 1,
    "user_name": "user10@gmail.com",
    "password": "Password10",
    "farm_name": "vendor10",
    "street_address": "street 10",
    "city": "CA",
    "state": "LA",
    "zip": "56789"
}


// res.body
{
    {
    "id": 1,
    "user_name": "user10@gmail.com"
}
}
```

### GET `api/items`

```js
// req.query
{
  
}

// res.body
[
  {
  "id": 1,
  "users_id": 1,
  "name": "Celery",
  "description": "Vegetable",
  "itemcount": "70",
  "itemprice": "90",
  "img": "img3.jpg",
  "date_created": "2020-03-01T00:00:00.000Z"
  }
]
```

### POST `/api/items`

```js
// req.body
{
    "users_id":"1",
    "name": "salmon",
    "description":"fish",
    "itemcount":"6",
    "itemprice":"6",
    "img":"img6.jpg",
    "date_created":"03/01/2020"

}

// res.body
[
    {
    "id": 16,
    "users_id": 1,
    "name": "salmon",
    "description": "fish",
    "itemcount": "6",
    "itemprice": "6",
    "img": "img6.jpg",
    "date_created": "2020-03-01T00:00:00.000Z"
}
]
```

### DELETE `/api/items/:id`

```js
// req.query
{
  id: ID
}

// res.body

  {

  }

```

## Responsive 
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap 
This is v1.0 of the app, but future enhancements are expected to include:
* Weekly calendar - in order to map recipes based on the calendar.
* Add more specialized diets (dairy free)
* Add screenshots of the app for explanatory purpose on the dashboard.

## How to run it 
Use command line to navigate into the project folder and run the following in terminal

Local React scripts

To install the react project ===> npm install
To run react (on port 3000) ===> npm start
To run tests ===> npm run test

Local Node scripts

To install the node project ===> npm install
To migrate the database ===> npm run migrate -- 1
To run Node server (on port 8000) ===> npm run dev
To run tests ===> npm run test


### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test