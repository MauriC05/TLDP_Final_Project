import Navbar from './Navbar'

function IngredientSearch() {
  return (
    <div>
        <Navbar />
        <h1 style={{ fontFamily: '"Playwrite IE", cursive'}}>Find Ingredients Near You</h1>
        <p style={{ fontFamily: '"Playwrite IE", cursive'}}>
            Type the ingredients you want and we will show you where to find them!</p>
        <textarea style={{width:'500px', height:'175px', marginTop: '50px', fontFamily: "Times New Roman", fontSize: '24px' }} />
        <button style={{fontSize: '16px', outline: 'none',display: 'block', borderRadius: '12px', 
                        marginTop: '35px', marginLeft: '525px', backgroundColor: '#FFFDD0', 
                        height: '50px', width: '100px', fontFamily: "Times New Roman", color: '#964B00', 
                        borderColor: '#964B00', border: '2px solid #964B00', cursor: 'pointer'}}
            className="search-button"
            onClick={() => alert('Searching...')}
            >
            Find Ingredients
        </button>
    </div>

  )
}

export default IngredientSearch