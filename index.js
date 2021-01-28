const cards = document.querySelector("#recipe-cards")

fetch('http://localhost:3000/recipes')
  .then(response => response.json())
  .then(recipes => {
    recipes.forEach(recipe => {
      const recipeCard = document.createElement('div')
      const recipeName = document.createElement('h1')
      const rating = document.createElement('h2')
      const mealType = document.createElement('p')
      const difficulty = document.createElement('p')
      const description = document.createElement('p')
      // const image = document.createElement('img')

      recipeCard.className = "individual-card"
      recipeName.textContent = recipe.name
      rating.textContent = `Rating: ${recipe.rating}`
      mealType.textContent = `Meal Type: ${recipe.meal_type}`
      difficulty.textContent = `Difficulty: ${recipe.difficulty}`
      description.innerHTML = `Learn More: <a href="showRecipe.html?id=${recipe.id}">here!</a>`
      console.log(recipeCard)

      cards.appendChild(recipeCard)
      recipeCard.append(recipeName, rating, mealType, difficulty, description)
    })
  })









// const indexSection = document.querySelector('#index-section')

// const renderRecipeImage = (recipe) => {
//   const recipeImage = document.createElement('img')
//   recipeImage.src = recipe.image
//   recipeImage.classList.add('recipe-image')
//   return recipeImage
// }

// const renderRecipeName = (recipe) => {
//   const recipeName = document.createElement('h2')
//   recipeName.textContent = recipe.name
//   recipeName.classList.add('recipe-name')
//   return recipeName
// }

// const renderRecipeCards = (recipes) =>{
//   recipes.forEach(recipe => {
//     const recipeCard = document.createElement('div')
//       recipeCard.classList.add('recipe-card')
//     const recipeName = renderRecipeName(recipe)
//     const recipeImage = renderRecipeImage(recipe)
//     recipeCard.append(recipeImage, recipeName)
//     indexSection.append(recipeCard)
//     })
// }

// fetch("http://localhost:3000/recipes")
//   .then(response => response.json())
//   .then(renderRecipeCards)