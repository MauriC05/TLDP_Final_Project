import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link className="home-link" style={{textDecoration: 'none', color: '#964B00', float: 'left', marginLeft: '200px'}} to="/">Home</Link>
        <Link className="recipe-link" style={{textDecoration: 'none', color: '#964B00'}} to="/ingredients">Find Recipes</Link>
        <Link className="ingredients-link" style={{textDecoration: 'none', color: '#964B00', float: 'right', marginRight: '200px'}} to="/ingredientsearch">Find Ingredients</Link>

    </div>

  )
}

export default Navbar