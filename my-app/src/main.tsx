import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Ingredients from './Ingredients.tsx'
import IngredientSearch from './IngredientSearch.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Ingredients" element={<Ingredients />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Ingredients" element={<Ingredients />} />
        <Route path="/IngredientSearch" element={<IngredientSearch />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)