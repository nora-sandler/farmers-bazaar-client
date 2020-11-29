import React from "react"
import config from "./config"
import TokenService from "./services/token-service.js"



class RecipesForDiets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dietsByUserId: [],
            diets: [],
            recipesByUserId: []
        };
    }

    componentDidMount() {
        // console.log(this.props.dietName)
        this.showUsersRecipesByDiet()
        let currentUser = TokenService.getUserId();
        //console.log(currentUser)

        
        //if the user is not logged in, send him to landing page
        if (!TokenService.hasAuthToken()){
            window.location = '/'
        }

        let getDietByUserId = `${config.API_ENDPOINT}/recipes/diets-by-user-id/${currentUser}`;

        fetch(getDietByUserId)
            .then((dietsInList) => dietsInList.json())
            .then((dietsInList) => {
                this.setState({
                    dietsByUserId: dietsInList,
                });
                // console.log(this.state);
            })

            .catch((error) => this.setState({ error }));

    }

    showUsersRecipesByDiet() {
        let currentUser = TokenService.getUserId();
        // let currentUser = 1;
        //console.log(currentUser)
        let getRecipesByUserId = `${config.API_ENDPOINT}/recipes/recipes-by-user-id/${currentUser}`;

        fetch(getRecipesByUserId)
            .then((recipesInList) => recipesInList.json())
            .then((recipesInList) => {
                // console.log(recipesInList[0].diet_name)

                let filterRecipesByDietName = recipesInList.filter((recipe) => {
                    return (recipe.diet_name === this.props.dietName) 
                })
                // console.log(filterRecipesByDietName)
                this.setState({
                    recipesByUserId: filterRecipesByDietName,
                });
                // console.log(this.state)
            })

            .catch((error) => this.setState({ error }));

    }



    render() {
        // console.log(this.state.recipesByUserId.length)
        let showRecipePage = ''
        //by default show there are no recipes 
        if (this.state.recipesByUserId.length === 0) { 
        showRecipePage =
            <div className="RecipesForDiets">
                No recipes here
            </div>
        }
        // if there are recipes fir this diet
        else {

            // display details for each one of the recipes
            let existingRecipes = this.state.recipesByUserId.map((recipe, key) => {
                if (recipe) {
                    return (
                        <li key ={key}> 
                            <p>{recipe.recipe_name} </p>
                        </li>
                    )
                }
            })

            // display recipeDetails to the page
            showRecipePage =
                <div className="RecipesForDiets">
                    <h4>Recipes</h4>
                    {existingRecipes}
                </div>
        }
        return (
            <section id="RecipesForDiets">
                {showRecipePage}
            </section>
        );
    }
}

export default RecipesForDiets;
