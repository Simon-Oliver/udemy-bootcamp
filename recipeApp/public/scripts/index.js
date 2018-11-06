// CLIENTSIDE LOGIC
let ingredientCounter = 1;

function newIngredient() {
  const ingredients = document.querySelector('#ingredients');
  const DIV = document.createElement('div');
  DIV.innerHTML = `
  <div id="ingredients" class="three fields">
  <div class="field">
      <input type="text" name="recipe[ingredient][${ingredientCounter}][ingredient]" placeholder='Ingredient' value="">
  </div>
  <div class="field">
      <input type="text" name="recipe[ingredient][${ingredientCounter}][quantity]" placeholder='Quantaty' value="">
  </div>
  <div class="field">
      <input type="text" name="recipe[ingredient][${ingredientCounter}][measure]" placeholder='Ingredient' value="">
  </div>
</div>
`;
  ingredients.appendChild(DIV);

  ingredientCounter++;
}

function rmIngredient() {
  const select = document.querySelector('#ingredients');
  select.removeChild(select.lastChild);
  ingredientCounter--;
}

const addIngredient = document.querySelector('#addIngredient');
addIngredient.addEventListener('click', newIngredient);
const removeIngredient = document.querySelector('#removeIngredient');
removeIngredient.addEventListener('click', rmIngredient);
