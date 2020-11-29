# Diet Meal Planner 
For people who are following diets restrictions and need new ideas on recipes.

## Working Prototype 
(Example) You can access a working prototype of the React app here: https://diet-meal-planner.vercel.app/ and Node app here: https://diet-meal-planner.herokuapp.com/


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

### Search diet page 
* As a registered user 
* I want to find the diet I am following and see what recipes are available and their details (not the whole list which is available for registered users).
* So I can decide if I want to register.

### Add recipe page
* As a registered user
* I want to find the recipes available in accordance with my diet plan  and their details.
* So I can save them in my account.

### Recipe details page
* As a registered user
* I want to see details of the recipe including cooking process, necessary ingredients and equipment.
* So I can save them in my account.


<!-- ### User calendar page
* As a registered user
* I want to add chosen recipes into the '7-day calendar' inside the app.
* So that I can plan my weekly meal.
 -->


### Wireframes 
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing_page.jpg)
Sign up Page 
![Register Page](/github-images/wireframes/sign_up_page.jpg)
Login Page
![Login Page](/github-images/wireframes/sign_up_page.jpg)
How it works 1 Page
![How it works 1 Page](/github-images/wireframes/how_it_works_1.jpg)
How it works 2 Page
![How it works 2 Page](/github-images/wireframes/how_it_works_2.jpg)
How it works  3 Page
![How it works page 3 Page](/github-images/wireframes/how_it_works_3.jpg)
How it works  4 Page
![How it works  4 Page](/github-images/wireframes/how_it_works_4.jpg)
Add recipes Page 
![Add recipes Page](/github-images/wireframes/add_recipes_page.jpg)
Recipe_details Page
![Recipe_details Page](/github-images/wireframes/recipe_detail_page.jpg)
Weekly calendar Page
![Weekly calendar Page](/github-images/wireframes/weekly_calendar_page.jpg)


## Screenshots 
Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/Landing_page.png)
Register Page
![Register Page](/github-images/screenshots/Signup.png)
Login Page
![Login Page](/github-images/screenshots/Login.png)
Recipes list Page
![Recipes list Page](/github-images/screenshots/Recipes.png)
Recipe details Page
![Recipe details Page](/github-images/screenshots/Recipe_details.png)
Added recipes Page
![Added recipes Page](/github-images/screenshots/Added_recipes.png)



## Functionality 
The app's functionality includes:
* Every User has the ability to create an account
* Every User has the ability to login into the account
* Every User has the ability to search for diet recipes
* Every User has the ability to save recipes in the account
* Every User has the ability to layout recipes on weekly calendar 


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
            * __Footer.js__ 
        * __ListOfDiets.js__
        * __AddRecipesPage.js__
        * __RecipesForsDiets.js__



## Back-end Structure - Business Objects 
* Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)

* Recipes (database table)
    * id (auto-generated)
    * recipe_name (varchar 255)
    * recipe_img 

* Recipe_Detail (database table)  
    * id (auto-generated)
    * diet_name (varchar 255)
    * recipe_name (varchar 255)
    * recipe_img 
    * recipe_ingredients (varchar 255)
    * nutrition_info (varchar 255)
    * recipe_equipment (varchar 255) 
    * recipe_instruction (varchar 255)


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
├── /recipes
│   └── GET
│       ├── /
│       ├── /diets-by-user-id/:id
│       ├── /recipes-by-user-id/:id
│   └── POST
│       └── /
│   └── DELETE
│       └── /:id
├── /recipe-details
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
    "user_name": "demo@gmail.com",
    "password": "123456"
}


// res.body
{
    {
    "id": 1,
    "user_name": "demo@gmail.com"
}
}
```

### GET `api/recipes`

```js
// req.query
{
  
}

// res.body
[
  {
  "id": 1,
  "user_id": 1,
  "spoonacular_id": 617586,
  "recipe_name": "GlutenFree Stir Fried Beef and Broccoli with #McCormickFlavor #AD",
  "recipe_img": "GlutenFree-Stir-Fried-Beef-and-Broccoli-with--McCormickFlavor--AD-617586.jpg"
  }
]
```

### GET `/api/recipes/diets-by-user-id/:id`

```js
// req.params
{
  id: ID
}

// res.body
[
    {
        "diet_name": "glutenfree"
    }
]
```


### GET `/api/recipes/recipes-by-user-id/:id`

```js
// req.params
{
  id: ID
}

// res.body
[
    {
        "id": 76,
        "recipe_name": "Cashew-Crusted Salmon with Bok Choy",
        "recipe_img": "cashew-crusted-salmon-with-bok-choy-736719.jpeg",
        "spoonacular_id": 736719,
        "diet_name": "primal",
        "recipe_ingredients": "Freshly ground black pepper",
        "nutrition_info": "{\"percentProtein\":37.18,\"percentFat\":46.28,\"percentCarbs\":16.54}",
        "recipe_equipment": "{\"frying pan\"}",
        "recipe_instruction": "Heat 1 tablespoon of the oil in a large skillet over medium-high heat. Brush honey mustard all over salmon. Season both sides of salmon with onion flakes and black pepper. Place cashews in a shallow dish, add four of the salmon fillets and turn to coat. Place all salmon fillets in hot skillet and cook 3 minutes per side, until fork-tender.Heat remaining olive oil in separate large skillet over medium heat. Add garlic and cook 1 minute. Add bok choy and cook 2 minutes, until greens wilt but stalks are still crisp-tender. Season, to taste, with salt and pepper. Serve the cashew-crusted salmon with this meal and reserve 2 uncrusted fillets for another meal."
    }
]
```

### POST `/api/recipes`

```js
// req.body
{
    "user_id": 1,
    "spoonacular_id": 87,
    "recipe_name": "soup",
    "recipe_img": "img.jpeg"

}

// res.body
[
    {
    "id": 81,
    "user_id": 1,
    "spoonacular_id": 87,
    "recipe_name": "soup",
    "recipe_img": "img.jpeg"
}
]
```

### DELETE `/api/recipes/:id`

```js
// req.query
{
  id: ID
}

// res.body

  {

  }

```
### GET `api/recipe-details`

```js
// req.query
{
  
}

// res.body
[
  {
   "id": 71,
        "recipe_id": 71,
        "spoonacular_id": 492882,
        "diet_name": "glutenfree",
        "recipe_name": "Banana Nut Bread Granola Bars – January #ImprovChallenge (#glutenfree)",
        "recipe_img": "https://spoonacular.com/recipeImages/492882-556x370.jpg",
        "recipe_ingredients": "¼ -½ c honey or agave nectar (***See Note)",
        "nutrition_info": "{\"percentProtein\":10.91,\"percentFat\":42.67,\"percentCarbs\":46.42}",
        "recipe_equipment": "{\"baking pan\",\"bowl\",\"oven\"}",
        "recipe_instruction": "Preheat oven to 350°F.Coat an 8×8 in. baking pan with cooking spray.In a large bowl, toss together the oats and flax seed.In a medium bowl, stir together banana, honey, vanilla, cinnamon, nutmeg, and salt until well combined.Pour the liquid mixture over the oats mixture, and stir until evenly coated and the oats are moistened.Stir in the cranberries and walnuts.Press the mixture firmly into the prepared pan.Bake for 30-35 minutes, or until golden brown, and firm.Cool in pan for about 5-10 minutes, cut into bars, and remove from pan to finish cooling completely."
  }
]
```
### POST `api/recipe-details`

```js
// req.body
{
  "recipe_id": "70",
  "spoonacular_id": 15955,
  "diet_name": "dairy free",
  "recipe_name": "Crown Lamb Rack with Green Herb Couscous",
  "recipe_img": "https://spoonacular.com/recipeImages/15955-556x370.jpg",
  "recipe_ingredients": "hey",
  "nutrition_info": "{ percentProtein: 16.04, percentFat: 70.51, percentCarbs: 13.45 }",
  "recipe_equipment": "world",
  "recipe_instruction": "Rinse lamb roast, pat dry, and set on a metal rack in a shallow pan (at least 10 in. square). Mix ground cumin and 1/2 teaspoon each salt and pepper; rub onto roast, inside and out.                                                                                                 Bake lamb in a 450 regular or convection oven until a thermometer inserted horizontally through roast into center of thickest part reads 145 to 150 for rare, 35 to 40 minutes, or 155 for medium-rare, 40 to 45 minutes. If bone tips start to scorch, drape them with foil.                                                                                                 Meanwhile, in a 10- to 12-inch frying pan over medium-high heat, shake pine nuts frequently until lightly browned, about 3 minutes; pour into a small bowl.                                                                                                 To pan, add onion and sausages; stir frequently over high heat, breaking meat into small pieces, until lightly browned, about 10 minutes. Add broth and cover; when boiling, stir in peas and cover. When boiling again, stir in couscous, cover, and remove from heat. Let stand in a warm place 10 to 20 minutes.                                                                                                 As lamb roasts, in a food processor or with a knife, finely chop parsley, mint, and dill (or crumble dried herbs) and mix.                                                                                                 Transfer roast to a platter; keeping it warm, let rest 5 to 10 minutes. Stir herb mixture into hot couscous; fill center of roast with some of the couscous and spoon remainder around the meat. Sprinkle couscous with pine nuts. Cut lamb between ribs and serve chops with couscous. Add more salt and pepper to taste."
}

// res.body
[
   {
    "id": 81,
    "recipe_id": 70,
    "spoonacular_id": 15955,
    "diet_name": "dairy free",
    "recipe_name": "Crown Lamb Rack with Green Herb Couscous",
    "recipe_img": "https://spoonacular.com/recipeImages/15955-556x370.jpg",
    "recipe_ingredients": "hey",
    "nutrition_info": "{ percentProtein: 16.04, percentFat: 70.51, percentCarbs: 13.45 }",
    "recipe_equipment": "world",
    "recipe_instruction": "Rinse lamb roast, pat dry, and set on a metal rack in a shallow pan (at least 10 in. square). Mix ground cumin and 1/2 teaspoon each salt and pepper; rub onto roast, inside and out.                                                                                                 Bake lamb in a 450 regular or convection oven until a thermometer inserted horizontally through roast into center of thickest part reads 145 to 150 for rare, 35 to 40 minutes, or 155 for medium-rare, 40 to 45 minutes. If bone tips start to scorch, drape them with foil.                                                                                                 Meanwhile, in a 10- to 12-inch frying pan over medium-high heat, shake pine nuts frequently until lightly browned, about 3 minutes; pour into a small bowl.                                                                                                 To pan, add onion and sausages; stir frequently over high heat, breaking meat into small pieces, until lightly browned, about 10 minutes. Add broth and cover; when boiling, stir in peas and cover. When boiling again, stir in couscous, cover, and remove from heat. Let stand in a warm place 10 to 20 minutes.                                                                                                 As lamb roasts, in a food processor or with a knife, finely chop parsley, mint, and dill (or crumble dried herbs) and mix.                                                                                                 Transfer roast to a platter; keeping it warm, let rest 5 to 10 minutes. Stir herb mixture into hot couscous; fill center of roast with some of the couscous and spoon remainder around the meat. Sprinkle couscous with pine nuts. Cut lamb between ribs and serve chops with couscous. Add more salt and pepper to taste."
}
]
```

### DELETE `/api/recipes-details/:id`

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