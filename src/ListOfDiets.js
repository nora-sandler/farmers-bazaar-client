import React from "react"
import RecipesForDiets from "./RecipesForDiets"
import config from "./config"
import { NavLink } from 'react-router-dom'
import './component.css'
import TokenService from "./services/token-service"


class ListOfDiets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dietsByUserId: [],
            diets: [],
            recipesByUserId: []
        };
    }


    componentDidMount() {
        // this.showUsersRecipesByDiet()
        // let currentUser = TokenService.getUserId();
        // // console.log(currentUser)
        
        // //if the user is not logged in, send him to landing page
        // if (!TokenService.hasAuthToken()){
        //     window.location = '/'
        // }
        // let getDietByUserId = `${config.API_ENDPOINT}/recipes/diets-by-user-id/${currentUser}`;

        // fetch(getDietByUserId)
        //     .then((dietsInList) => dietsInList.json())
        //     .then((dietsInList) => {
        //         console.log(dietsInList)
        //         this.setState({
        //             dietsByUserId: dietsInList,
        //         });
        //         //console.log(this.state);
        //     })

        //     .catch((error) => this.setState({ error }));
        
    }

    showUsersRecipesByDiet() {
        let currentUser = TokenService.getUserId();
        
        // let currentUser = 1;
        //console.log(currentUser)
        let getRecipesByUserId = `${config.API_ENDPOINT}/recipes/recipes-by-user-id/${currentUser}`;

        fetch(getRecipesByUserId)
            .then((recipesInList) => recipesInList.json())
            .then((recipesInList) => {
                console.log(recipesInList)
                this.setState({
                    recipesByUserId: recipesInList,
                });

            })

            .catch((error) => this.setState({ error }));
        
    }



    deleteDiet(event) {
        event.preventDefault();

        const data = {};

        const formData = new FormData(event.target);

        for (let value of formData) {
            data[value[0]] = value[1];
        }

       // console.log(data);

        let { dietId } = data;
        //console.log(dietId);


        fetch(`${config.API_ENDPOINT}/diets/diet/${dietId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        }).then((response) => {
            window.location = `/diet/show/${dietId}`;
        });
    }

    render() {
        return (
            <section id="listOfDiets">
                <div className="listOfDiets">
                    <h2>Choose your diet</h2>
                    <p>
                        Our diet list includes variety of diets and allows to
                        choose the diet you would like to follow or already
                        following.
                    </p>
                </div>
                <div>
                    <ul>
                        <li>
                            <h3> Gluten Free</h3>
                            <p>
                                Eliminating gluten meals avoiding wheat, barley,
                                rye, and other gluten-containing grains and
                                foods made from them (or that may have been
                                cross contaminated).
                            </p>
                            <NavLink className='show-button' to="/recipe/add/glutenfree">Show recipes</NavLink>
                            <RecipesForDiets dietName="glutenfree" />
                        </li>
                        <li>
                            <h3> Vegetarian</h3>
                            <p>
                                No ingredients may contain meat or meat
                                by-products, such as bones or gelatin.
                            </p>
                            <NavLink className='show-button' to="/recipe/add/vegetarian">Show recipes</NavLink>
                            <RecipesForDiets dietName="vegetarian" />
                        </li>
                        <li>
                            <h3> Lacto ovo vegetarian</h3>

                            <p>
                                All ingredients must be vegetarian and none of
                                the ingredients can be or contain egg.
                            </p>
                            <NavLink className='show-button' to="/recipe/add/lacto-ovo-vegetarian">Show recipes</NavLink>
                            <RecipesForDiets dietName="lacto-ovo-vegetarian" />
                        </li>
                        <li>

                            <h3> Vegan</h3>
                            <p>
                                No ingredients may contain meat or meat
                                by-products, such as bones or gelatin, nor may
                                they contain eggs, dairy, or honey.
                            </p>
                            <NavLink className='show-button' to="/recipe/add/vegan">Show recipes</NavLink>
                            <RecipesForDiets dietName="vegan" />
                        </li>
                        <li>

                            <h3> Pescatarian</h3>

                            <p>
                                Everything is allowed except meat and meat
                                by-products - some pescetarians eat eggs and
                                dairy, some do not.
                            </p>
                            <NavLink className='show-button' to="/recipe/add/pescatarian">Show recipes</NavLink>
                            <RecipesForDiets dietName="pescatarian" />
                        </li>
                        <li>

                            <h3> Paleolithic</h3>
                            <p>
                                Allowed ingredients include meat (especially
                                grass fed), fish, eggs, vegetables, some oils
                                (e.g. coconut and olive oil), and in smaller
                                quantities, fruit, nuts, and sweet potatoes. We
                                also allow honey and maple syrup (popular in
                                Paleo desserts, but strict Paleo followers may
                                disagree). Ingredients not allowed include
                                legumes (e.g. beans and lentils), grains, dairy,
                                refined sugar, and processed foods.
                            </p>
                            <NavLink className='show-button' to="/recipe/add/paleolithic">Show recipes</NavLink>
                            <RecipesForDiets dietName="paleolithic" />
                        </li>
                        <li>

                            <h3> Primal</h3>
                            <p>
                                Very similar to Paleo, except dairy is allowed -
                                think raw and full fat milk, butter, ghee, etc.
                            </p>
                            <NavLink className='show-button' to="/recipe/add/primal">Show recipes</NavLink>
                            <RecipesForDiets dietName="primal" />
                        </li>
                        <li>

                            <h3> Calorie-based</h3>

                            <p>
                                The average woman needs to eat about 2,000 calories per day to maintain her weight, and 1,500 calories per day to lose one pound of weight per week.
                                Meanwhile, the average man needs 2,500 calories to maintain, and 2,000 to lose one pound of weight per week.
                            </p>
                            <NavLink className='show-button' to="/recipe/add/calorie">Show recipes</NavLink>
                            <RecipesForDiets dietName="calorie" />
                        </li>
                        <li>

                            <h3> Protein diet</h3>

                            <p>
                                Going on a high-protein diet may help you tame your hunger, which could help you lose weight.
                                You can try it by adding some extra protein to your meals. Give yourself a week, boosting protein gradually.
                                Remember, calories still count. You'll want to make good choices when you pick your protein.
                            </p>
                            <NavLink className='show-button' to="/recipe/add/protein">Show recipes</NavLink>
                            <RecipesForDiets dietName="protein" />
                        </li>
                    </ul>



                </div>
            </section>

        );
    }
}

export default ListOfDiets;
