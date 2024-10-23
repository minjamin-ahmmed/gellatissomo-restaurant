import PropTypes from "prop-types"
import { FaRegClock } from "react-icons/fa";
import { LiaBurnSolid } from "react-icons/lia";

const Recipe = ({recipe, handleWantToCook}) => {

   const {recipe_img,recipe_name,description, preparing_time, calories, ingredients  } = recipe
    
    return (
        <div className="border border-gray-300 p-4 rounded-xl">
            <div className="w-full">
            <img className="w-full h-[300px] object-cover rounded-2xl" src={recipe_img} alt="" />
            <h3 className="text-xl font-bold text-[#282828] my-3"> {recipe_name} </h3>
            <p className="text-[#878787] text-md mb-4">{description}</p>
            <p className="text-lg font-semibold text-[#282828]">Ingredients: {ingredients.length} </p>
                <p className="text-[#878787] text-lg font-normal mb-3">
                {
                    ingredients.map((ingredient, idx) => <li key={idx} >{ingredient}</li>)
                }
                </p>

                <div className="flex items-center gap-10 mb-6">
                    <p className="text-[#282828a1] text-xl flex items-center gap-2"> <FaRegClock/> {preparing_time} </p>
                    <p className="text-[#282828a1] text-xl flex items-center gap-2"> <LiaBurnSolid /> {calories} Calories</p>
                </div>

                <button onClick={() => handleWantToCook(recipe)} className="btn bg-[#0BE58A] text-black font-bold rounded-3xl border-none px-5">Want To Cook</button>


            </div>

        </div>
    );
};

Recipe.propTypes = {
    recipe:PropTypes.object.isRequired,

}

export default Recipe;