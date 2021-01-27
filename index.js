const indexSection = document.querySelector('#index-section')

const renderRecipeImage = (recipe) => {
  const recipeImage = document.createElement('img')
  recipeImage.src = recipe.image
  recipeImage.classList.add('recipe-image')
  return recipeImage
}

const renderRecipeName = (recipe) => {
  const recipeName = document.createElement('h2')
  recipeName.textContent = recipe.name
  recipeName.classList.add('recipe-name')
  return recipeName
}

const renderRecipeCards = (recipes) =>{
  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div')
      recipeCard.classList.add('recipe-card')
    const recipeName = renderRecipeName(recipe)
    const recipeImage = renderRecipeImage(recipe)
    recipeCard.append(recipeImage, recipeName)
    indexSection.append(recipeCard)
    })
}

fetch("http://localhost:3000/recipes")
  .then(response => response.json())
  .then(renderRecipeCards)