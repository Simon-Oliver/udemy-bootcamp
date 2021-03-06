// CLIENTSIDE LOGIC
let ingredientCounter = document.querySelectorAll(
  '#ingredinetContainer div.three.fields'
).length;

function newIngredient() {
  const ingredients = document.querySelector('#ingredinetContainer');
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
  const select = document.querySelector('#ingredinetContainer');
  select.removeChild(select.lastElementChild);
  ingredientCounter--;
}

const addIngredient = document.querySelector('#addIngredient');
addIngredient.addEventListener('click', newIngredient);
const removeIngredient = document.querySelector('#removeIngredient');
removeIngredient.addEventListener('click', rmIngredient);
