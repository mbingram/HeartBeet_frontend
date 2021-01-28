const searchParams = new URLSearchParams(window.location.search)
const recipeId = searchParams.get('id')
const recipeSection = document.querySelector('#recipe-section')

const renderRecipeImage = (recipe) => {
  const recipeImage = document.createElement('img')
  recipeImage.src = recipe.image
  recipeImage.classList.add('recipe-image')
  return recipeImage
}

const renderRecipeRating = (recipe) => {
  const recipeRating = document.createElement('h3')
  recipeRating.textContent = "Rating: " + recipe.rating + "/10"
  recipeRating.classList.add('recipe-rating')
  return recipeRating
}

const renderRecipeDifficulty = (recipe) => {
  const recipeDifficulty = document.createElement('h3')
  recipeDifficulty.textContent = "Difficulty: " + recipe.difficulty
  return recipeDifficulty
}

const renderRecipeMealType = (recipe) => {
  const recipeMealType = document.createElement('h3')
  recipeMealType.textContent = "Meal Type: " + recipe.meal_type
  recipeMealType.classList.add('recipe-meal-type')
  return recipeMealType
}

const renderRecipeName = (recipe) => {
  const recipeName = document.createElement('h2')
  recipeName.textContent = recipe.name
  recipeName.classList.add('recipe-name')
  return recipeName
}

const renderRecipeDescription = (recipe) => {
  const recipeDescription = document.createElement('p')
  recipeDescription.textContent = "Instructions: " + recipe.description
  recipeDescription.classList.add('recipe-description')
  return recipeDescription
}

const renderRecipeProperties = (recipe) => {
  const recipeContainer = document.createElement('div')
    recipeContainer.classList.add('recipe-container')
  const recipeImage = renderRecipeImage(recipe)
  const recipeName = renderRecipeName(recipe)
  const recipeDescription = renderRecipeDescription(recipe)
  const recipeDifficulty = renderRecipeDifficulty(recipe)
  const recipeMealType = renderRecipeMealType(recipe)
  const recipeRating = renderRecipeRating(recipe)
  recipeSection.append(recipeContainer)
  recipeContainer.append(recipeImage, recipeName, recipeRating, recipeDifficulty, recipeMealType, recipeDescription)
}

fetch(`http://localhost:3000/recipes/${recipeId}`)
  .then(response => response.json())
  .then(renderRecipeProperties) 