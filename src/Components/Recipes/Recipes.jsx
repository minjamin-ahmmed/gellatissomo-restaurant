import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ( {handleWantToCook} ) => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {

        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))

    },[])

    return (
        <div className="lg:col-span-2 border border-gray-400 rounded-2xl">

           <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-5">
           {
                recipes.map((recipe, idx) => <Recipe 
                key={idx}
                recipe={recipe}
                handleWantToCook={handleWantToCook}
                ></Recipe>)
            }
           </div>

        </div>
    );
};

export default Recipes;