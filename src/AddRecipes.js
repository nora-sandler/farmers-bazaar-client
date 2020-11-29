import React from "react"
import config from "./config"
import TokenService from "./services/token-service"

class AddRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipesFound: [],
            params: {},
            response: [],
            selectedDietName: ''

        };
    }

    componentDidMount() {
        const dietName = this.props.match.params.dietName;
        // let currentUser = TokenService.getUserId();
        // console.log(currentUser)
        
        //if the user is not logged in, send him to landing page
        if (!TokenService.hasAuthToken()){
            window.location = '/'
        }
        this.setState({
            selectedDietName: dietName
        });
        /////////////GET RECIPES FROM THE API/////////////////////////////////////////////////////////////
        let url = `${config.API_ENDPOINT}/recipe-by-diet-api-data/${dietName}`;
        // console.log(url)

        fetch(url)
            .then((response) => response.json())

            .then((data) => {
                //console.log(data)
                this.setState({
                    recipesFound: data.results
                });
                //console.log(this.state)
            })

            .catch((err) => {
                console.log(err);
            });


    }


    addRecipe(event) {

        // console.log('hello there')

        event.preventDefault()


        const data = {}

        const formData = new FormData(event.target)

        for (let value of formData) {
            data[value[0]] = value[1]
        }

        let user_id = TokenService.getUserId();

        let { spoonacular_id, recipe_name, recipe_img, selectedDietName } = data;
        // console.log(spoonacular_id, recipe_name, recipe_img)
        let payload = {
            user_id: user_id,
            spoonacular_id: spoonacular_id,
            recipe_name: recipe_name,
            recipe_img: recipe_img,

        }

        const dietName = selectedDietName

        // console.log(payload)

        ////////////////POST RECIPE//////////////////////////////////////////////

        fetch(`${config.API_ENDPOINT}/recipes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => response.json())
            .then(responseJson => {
                // console.log("post recipe response", responseJson)




                //////////GET RECIPE_DETAILS/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                let addRecipeDetailsBySponacularIdUrl = `${config.API_ENDPOINT}/recipe-by-spoonacular-id-api-data/${spoonacular_id}`;
                // console.log(addRecipeDetailsBySponacularIdUrl)

                fetch(addRecipeDetailsBySponacularIdUrl)
                    .then((response) => response.json())

                    .then((recipeDetailsData) => {
                        //console.log(recipeDetailsData)
                        //console.log(recipeDetailsData[0].analyzedInstructions.length)
                        let equipment_string = 'No details'
                        if (recipeDetailsData[0].analyzedInstructions.length > 0) { 
                            equipment_string = recipeDetailsData[0].analyzedInstructions[0].steps[0].equipment.map(item => {
                                return item.name
                            })
                        }
                        //console.log(equipment_string)

                        let instructionString = "No details"
                        if (recipeDetailsData[0].instructions ) { 
                            instructionString = recipeDetailsData[0].instructions
                        }
                        let recipeDetailsPayload =
                        {
                            recipe_id: responseJson.id,
                            spoonacular_id: recipeDetailsData[0].id,
                            diet_name: dietName,
                            recipe_name: recipeDetailsData[0].title,
                            recipe_img: recipeDetailsData[0].image,
                            recipe_ingredients: recipeDetailsData[0].extendedIngredients[0].original,
                            nutrition_info: recipeDetailsData[0].nutrition.caloricBreakdown,
                            recipe_equipment: equipment_string,
                            recipe_instruction: instructionString
                        }

                        //console.log(recipeDetailsPayload)
                        ////////POST RECIPE_DETAILS//////////////////////////////////////////////////////////

                        fetch(`${config.API_ENDPOINT}/recipe-details`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(recipeDetailsPayload),
                        })
                            .then(response => {
                                //console.log("response", response)
                                window.location = `/diet/show`

                            })
                            .catch(err => {
                                console.log(err);
                            });

                    })

                    .catch((err) => {
                        console.log(err);
                    });
            })

            .catch(err => {
                console.log(err);
            });

    }

    render() {
        let foundRecipes = this.state.recipesFound.map(recipe => {
            let imgUrl = `https://spoonacular.com/recipeImages/${recipe.image}`
            return (
                <li key={recipe.id}>
                    <a href={recipe.sourceUrl} target='_blank' rel="noopener noreferrer">
                        <h3>
                            {recipe.title}
                        </h3>
                        <p>
                            Cooking time: {recipe.readyInMinutes}
                        </p>
                        <p>
                            Servings: {recipe.servings}
                        </p>

                        <img
                            className='recipeImage'
                            src={imgUrl}
                            alt="img"
                        />
                    </a>
                    <form className="addRecipeForm" onSubmit={this.addRecipe}>
                        <input type='hidden' name='spoonacular_id' defaultValue={recipe.id}></input>
                        <input type='hidden' name='recipe_name' defaultValue={recipe.title}></input>
                        <input type='hidden' name='recipe_img' defaultValue={recipe.image}></input>
                        <input type='hidden' name='selectedDietName' defaultValue={this.state.selectedDietName}></input>
                        <button type='submit' className='addRecipeBtn'>Add recipe</button>
                    </form>

                </li>

            )
        })
        return (
            <div className="AddRecipes">
                <section id="AddRecipesPage">
                    <div className="listOfMeals">
                        <h2>Choose your meal</h2>
                        <p>
                            Discover variety of delicious recipes to cook and
                            enjoy!
                        </p>
                        <ul>
                            {foundRecipes}
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default AddRecipes;
