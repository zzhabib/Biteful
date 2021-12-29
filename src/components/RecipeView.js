import React from "react"
import { Grid } from "@mui/material"
import RecipeCard from "./RecipeCard"

//props contains array of recipes
const RecipeView = (props) => {
  const recipeItems = props.recipes.map(recipe => {
    return (
      <Grid item sm={2} md={2} xl={2} key={recipe.id}>
        <RecipeCard
          recipe={recipe}
          onDelete={props.onDelete}
        />
      </Grid>
    )
  })

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {recipeItems}
    </Grid>

  )
}

export default RecipeView