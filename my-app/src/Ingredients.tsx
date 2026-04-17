import { useState } from 'react'
import Navbar from './Navbar'
import { getRecipesByIngredients, getIngredientSuggestions} from './api/spoonacular'

function Ingredients() {
  const [input, setInput] = useState('')
  const [recipes, setRecipes] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [addedIngredients, setAddedIngredients] = useState<any[]>([])
  
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
        {'X'}
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

      <div style={{ marginTop: '40px' }}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '30px', fontFamily: 'Times New Roman' }}>
            <img src={recipe.image} alt={recipe.title} width={200} style={{ borderRadius: '8px' }} />
            <h2>{recipe.title}</h2>
            <p>✅ <strong>You have:</strong> {recipe.usedIngredients.map((i: any) => i.name).join(', ')}</p>
            <p>❌ <strong>You need:</strong> {recipe.missedIngredients.map((i: any) => i.name).join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ingredients