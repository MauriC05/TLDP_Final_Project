import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link className="home-link" style={{textDecoration: 'none', color: '#000000', float: 'left', marginLeft: '200px'}} to="/">Home</Link>
        <Link className="recipe-link" style={{textDecoration: 'none', color: '#000000'}} to="/ingredients">Find Recipes</Link>
        <Link className="ingredients-link" style={{textDecoration: 'none', color: '#000000', float: 'right', marginRight: '200px'}} to="/ingredientsearch">Find Ingredients</Link>

    </div>

  )
}

export default Navbar