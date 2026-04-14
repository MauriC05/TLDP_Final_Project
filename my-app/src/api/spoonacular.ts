const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;
console.log('API KEY:', API_KEY); // add this line

export async function getRecipesByIngredients(ingredients: string[]) {
  const ingredientList = ingredients.join(",");

  const url =
    `https://api.spoonacular.com/recipes/findByIngredients` +
    `?apiKey=${API_KEY}` +
    `&ingredients=${encodeURIComponent(ingredientList)}` +
    `&number=10` +
    `&ranking=1` +
    `&ignorePantry=true`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`API error: ${response.status}`);

  return response.json();
}
