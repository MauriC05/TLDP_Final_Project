import { useState } from 'react'
import Navbar from './Navbar'
import { getRecipesByIngredients, getIngredientSuggestions } from './api/spoonacular'
import { getRecipeInstructions } from './api/groq'

function Ingredients() {
  const [input, setInput] = useState('')
  const [recipes, setRecipes] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [addedIngredients, setAddedIngredients] = useState<any[]>([])
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null)
  const [aiInstructions, setAiInstructions] = useState('')
  const [aiLoading, setAiLoading] = useState(false)

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)
    if (value.length > 2) {
      const data = await getIngredientSuggestions(value)
      setSuggestions(data)
    }
  }

  const handleSearch = async () => {
    const ingredients = addedIngredients
    if (!ingredients.length) return

    setLoading(true)
    setError('')
    setSelectedRecipe(null)
    setAiInstructions('')
    try {
      const data = await getRecipesByIngredients(ingredients)
      console.log('API response:', data)
      setRecipes(data)
    } catch (err) {
      console.log('Error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleRecipeClick = async (recipe: any) => {
    setSelectedRecipe(recipe)
    setAiInstructions('')
    setAiLoading(true)

    try {
      const used = recipe.usedIngredients.map((i: any) => i.name)
      const missed = recipe.missedIngredients.map((i: any) => i.name)
      const instructions = await getRecipeInstructions(recipe.title, used, missed)
      setAiInstructions(instructions)
    } catch (err) {
      console.log('AI Error:', err)
      setAiInstructions('Could not load instructions. Please try again.')
    } finally {
      setAiLoading(false)
    }
  }

  return (
    <div>
      <Navbar />
      <h1 style={{ fontFamily: '"Playwrite IE", cursive' }}>Find My Next Recipe</h1>
      <p style={{ fontFamily: '"Playwrite IE", cursive' }}>
        Type the ingredients you have and we will find the perfect recipe for you!
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          style={{ width: '500px', height: '50px', marginTop: '50px', fontFamily: 'Times New Roman', fontSize: '24px', cursor: 'text' }}
          placeholder="Type an ingredient..."
          value={input}
          onChange={handleInputChange}
        />

        {suggestions.length > 0 && (
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion.id} onClick={() => {
                setAddedIngredients([...addedIngredients, suggestion.name])
                setInput('')
                setSuggestions([])
              }}>
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}

        <h2 style={{ fontFamily: '"Playwrite IE", cursive', marginTop: '20px' }}>Added Ingredients</h2>

        <ul>
          {addedIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient}
              <button
                style={{
                  outline: 'none', marginLeft: '10px',
                  backgroundColor: '#FFFDD0', fontFamily: 'Times New Roman', color: '#964B00',
                  borderColor: '#964B00', border: '1px solid #964B00', cursor: 'pointer'
                }}
                onClick={() => setAddedIngredients(addedIngredients.filter((_, i) => i !== index))}
              >
                X
              </button>
            </li>
          ))}
        </ul>

        <button
          style={{
            fontSize: '16px', outline: 'none', display: 'block', borderRadius: '12px',
            marginTop: '35px', backgroundColor: '#FFFDD0',
            height: '50px', width: '100px', fontFamily: 'Times New Roman', color: '#964B00',
            borderColor: '#964B00', border: '2px solid #964B00', cursor: 'pointer'
          }}
          className="search-button"
          onClick={handleSearch}
        >
          {loading ? 'Finding Recipes...' : 'Find Recipes'}
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Recipe Results */}
      <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => handleRecipeClick(recipe)}
            style={{
              fontFamily: 'Times New Roman', cursor: 'pointer',
              border: `2px solid ${selectedRecipe?.id === recipe.id ? '#964B00' : '#ccc'}`,
              borderRadius: '12px', padding: '15px', width: '200px',
              backgroundColor: selectedRecipe?.id === recipe.id ? '#FFFDD0' : 'white'
            }}
          >
            <img src={recipe.image} alt={recipe.title} width={180} style={{ borderRadius: '8px' }} />
            <h3>{recipe.title}</h3>
            <p>✅ <strong>You have:</strong> {recipe.usedIngredients.map((i: any) => i.name).join(', ')}</p>
            <p>❌ <strong>You need:</strong> {recipe.missedIngredients.map((i: any) => i.name).join(', ')}</p>
          </div>
        ))}
      </div>

      {/* AI Instructions */}
      {selectedRecipe && (
        <div style={{
          marginTop: '50px', marginBottom: '50px', fontFamily: 'Times New Roman',
          maxWidth: '700px', margin: '50px auto', padding: '30px',
          border: '2px solid #964B00', borderRadius: '12px', backgroundColor: '#FFFDD0'
        }}>
          <h2 style={{ color: '#964B00' }}>🍽️ {selectedRecipe.title}</h2>
          {aiLoading ? (
            <p>✨ Generating recipe instructions...</p>
          ) : (
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: '16px', lineHeight: '1.8' }}>
              {aiInstructions}
            </pre>
          )}
        </div>
      )}
    </div>
  )
}

export default Ingredients