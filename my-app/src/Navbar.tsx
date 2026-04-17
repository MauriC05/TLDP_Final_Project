import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Link className="home-link" style={{textDecoration: 'none', color: '#964B00'}} to="/">Home</Link>
        <Link className="recipe-link" style={{textDecoration: 'none', color: '#964B00'}} to="/ingredients">Find Recipes</Link>
        <Link className="ingredients-link" style={{textDecoration: 'none', color: '#964B00'}} to="/ingredientsearch">Find Ingredients</Link>
        <Link className="pantry-link" style={{textDecoration: 'none', color: '#964B00'}} to="/pantry">My Ingredients</Link>

    </div>

  )
}

export default Navbar