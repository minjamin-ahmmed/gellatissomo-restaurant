


const Sidebar = ({recipeQueue, handleProcessingBtn, preparedRecipe, calculateTimeAndCalories, totalCalorie, totalTime}) => {
    return (

        // Want to Cook Table
        <div className="border border-gray-400 p-4 rounded-xl">
            <h1 className="text-center text-2xl font-bold">Want to Cook: {recipeQueue.length} </h1>
            <div className="divider"></div>
           
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            recipeQueue.map((recipe, index) => 

                <tr className="hover" key={index}>
            <th>{index + 1}</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.preparing_time}</td>
            <td>{recipe.calories}</td>

            <td><button onClick={() => {handleProcessingBtn(recipe.recipe_id) 
                                        calculateTimeAndCalories(recipe.preparing_time,recipe.calories)}
            } className="btn bg-[#0BE58A] text-black rounded-3xl border-none px-5">
            Preparing
            </button>
            </td>

          </tr>
            )
        }
   
    </tbody>
  </table>
</div>

            {/* Currently Cooking Table */}

            <h1 className="text-center text-2xl font-bold mt-5">Currently Cooking: {preparedRecipe.length} </h1>
            <div className="divider"></div>
           
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
        {
            preparedRecipe.map((recipe, index) => 

                <tr className="hover" key={index}>
            <th>{index + 1}</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.preparing_time}</td>
            <td>{recipe.calories}</td>
          </tr>
          
            )
        }

        <tr>
        <th></th>
        <td></td>
        <td>Total Time= {totalTime} minutes</td>
        <td>Total Calories= {totalCalorie}</td>
        </tr>
   
    </tbody>
  </table>
</div>



        </div>

     
        
    );
};

export default Sidebar;