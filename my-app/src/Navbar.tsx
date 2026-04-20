import { Link , useLocation} from 'react-router-dom'
import { useState } from 'react'
import webicon from './assets/webicon.png'
import { motion } from 'framer-motion'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  return (
  <div style={{  position: 'fixed', top: '0', left: '0', width: '100%', 
  display: 'flex', alignItems: 'center', backgroundColor: '#FFFDD0', padding: '10px', zIndex: '1000' }}>
    <button style={{
                  outline: 'none', marginLeft: '10px',
                  backgroundColor: '#FFFDD0', fontFamily: 'Times New Roman', color: '#964B00',
                  borderColor: '#FFFDD0', border: 'px solid #FFFDD0', cursor: 'pointer', fontSize: '20px'
                }}
                
                onClick={() => setIsOpen(!isOpen)}
              >
                ☰
                </button>
    {location.pathname === "/" && (
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={webicon} alt="Web Icon" width="100" height="100" style={{ borderRadius: '50%' }} />
  <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
  <motion.h1 style={{ fontFamily: '"Playwrite IE", cursive', fontWeight: 'bold' }}>
            {"Cuisine-ator".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))} 
          </motion.h1> 
          <motion.p style={{ fontFamily: '"Playwrite IE", cursive'}}>
            {"Find delicious recipes for any occasion!".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.p>
  </div>
  </div>)}
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