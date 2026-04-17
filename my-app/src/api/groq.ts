const GROQ_KEY = import.meta.env.VITE_GROQ_KEY


export async function getRecipeInstructions(recipeName: string, usedIngredients: string[], missedIngredients: string[]) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_KEY}`
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'user',
          content: `Give me a full recipe and step-by-step cooking instructions for "${recipeName}". 
I have these ingredients: ${usedIngredients.join(', ')}.
I still need: ${missedIngredients.join(', ')}.
Format it nicely with ingredients list and numbered steps.`
        }
      ]
    })
  })

  if (!response.ok) throw new Error(`Groq API error: ${response.status}`)
  const data = await response.json()
  return data.choices[0].message.content
}