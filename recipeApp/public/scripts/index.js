// CLIENTSIDE LOGIC
let ingredientCounter = 1;

function newIngredient() {
  const ingredients = document.querySelector('#ingredients');
  const DIV = document.createElement('div');
  DIV.innerHTML = `
  <div id="ingredients" class="three fields">
  <div class="field">
      <input type="text" name="recipe[ingredients][${ingredientCounter}][ingredient]" placeholder='Ingredient' required value="">
  </div>
  <div class="field">
      <input type="text" name="recipe[ingredients][${ingredientCounter}][quantity]" placeholder='Quantity' required value="">
  </div>
  <div class="field">
      <input type="text" name="recipe[ingredients][${ingredientCounter}][measure]" placeholder='Measure' required value="">
  </div>
</div>
`;
  ingredients.appendChild(DIV);

  ingredientCounter++;
}

function rmIngredient() {
  const select = document.querySelector('#ingredients');
  select.removeChild(select.lastElementChild);
  ingredientCounter--;
}

const addIngredient = document.querySelector('#addIngredient');
addIngredient.addEventListener('click', newIngredient);
const removeIngredient = document.querySelector('#removeIngredient');
removeIngredient.addEventListener('click', rmIngredient);
