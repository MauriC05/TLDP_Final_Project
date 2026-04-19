import { Link } from 'react-router-dom'
import { useState } from 'react'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
  <div style={{ position: 'fixed', top: '0', left: '0', }}>
    <button style={{
                  outline: 'none', marginLeft: '10px',
                  backgroundColor: '#FFFDD0', fontFamily: 'Times New Roman', color: '#964B00',
                  borderColor: '#FFFDD0', border: 'px solid #FFFDD0', cursor: 'pointer', fontSize: '20px'
                }}
                
                onClick={() => setIsOpen(!isOpen)}
              >
                ☰
                </button>
    {isOpen && (
      <div
    
     style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column'}}>
        <Link className="home-link" style={{textDecoration: 'none', color: '#964B00'}} to="/">Home</Link>
        <Link className="recipe-link" style={{textDecoration: 'none', color: '#964B00'}} to="/ingredients">Find Recipes</Link>
        <Link className="ingredients-link" style={{textDecoration: 'none', color: '#964B00'}} to="/ingredientsearch">Find Ingredients</Link>
        <Link className="pantry-link" style={{textDecoration: 'none', color: '#964B00'}} to="/pantry">My Ingredients</Link>

    </div>
    )}
  </div>
)
    
  
}

export default Navbar