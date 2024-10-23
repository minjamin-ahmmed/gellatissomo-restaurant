import { useState } from "react"
import Recipes from "./Components/Recipes/Recipes"
import Sidebar from "./Components/Sidebar/Sidebar"
import Banner from "./Components/Static Items/Banner"
import Header from "./Components/Static Items/Header"
import OurRecipe from "./Components/Static Items/OurRecipe"

function App() {

  const [recipeQueue, setRecipeQueue] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalorie, setTotalCalorie] = useState(0)



  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time)
    setTotalCalorie(totalCalorie + calories)
  }

  const handleWantToCook = (recipe) => {

  const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id);

        if(!isExist){
          setRecipeQueue([...recipeQueue, recipe])
        }
        else{
          alert("This Recipe is Already!!")
        }
            
  }

  const handleProcessingBtn = (id) => {

    //Find Which Recipe to Remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)

    //Remove From Want to Cook Table
    const updateRecipe = recipeQueue.filter(recipe => recipe.recipe_id !== id)

    setRecipeQueue(updateRecipe)
    setPreparedRecipe([...preparedRecipe, deletedRecipe])


  }

  console.log(recipeQueue)

  return (
    <div className="w-11/12 mx-auto py-10 space-y-5">
        {/* header */}
        <Header />

        {/* Banner */}
       <Banner></Banner>

        {/* Our Recipies */}
      <OurRecipe></OurRecipe>
      

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

        <Recipes
         handleWantToCook={handleWantToCook}
         ></Recipes>

        <Sidebar totalTime={totalTime} totalCalorie={totalCalorie} calculateTimeAndCalories={calculateTimeAndCalories} preparedRecipe={preparedRecipe} handleProcessingBtn={handleProcessingBtn} recipeQueue={recipeQueue}></Sidebar>
      </div>

    </div>
  )
}


export default App
