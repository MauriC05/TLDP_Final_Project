import Navbar from './Navbar'

function Pantry() {
  return (
    <div style={{ marginTop: '80px'}}>
        <Navbar />
        <h1 style={{ fontFamily: '"Playwrite IE", cursive'}}>Your Ingredients Stored with Care</h1>
        <p style={{ fontFamily: '"Playwrite IE", cursive'}}>
            These are the ingredients you stored in your virtual pantry!</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <textarea style={{width:'500px', height:'175px', marginTop: '50px', fontFamily: "Times New Roman", fontSize: '24px' }} />
        <button style={{fontSize: '16px', outline: 'none',display: 'block', borderRadius: '12px', 
                        marginTop: '35px', backgroundColor: '#FFFDD0', 
                        height: '50px', width: '100px', fontFamily: "Times New Roman", color: '#964B00', 
                        borderColor: '#964B00', border: '2px solid #964B00', cursor: 'pointer'}}
            className="search-button"
            onClick={() => alert('Adding to pantry...')}
            >
            Add to Pantry
        </button>
        </div>
    </div>
    
  )
}

export default Pantry