import { useState } from 'react'
import './App.css'
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';


function App() {
  const [currentPage, setCurrentPage] = useState(<SignUp/>); 
  return (
    <div>
      <h1>Home Page</h1>
      <div style={{display:"flex",justifyContent:"center", gap:"20px"}}>
        <p onClick={() => setCurrentPage(<SignUp/>)} style={buttonStyle}>signUp</p>
        <p onClick={() => setCurrentPage(<SignIn/>)} style={buttonStyle}>signIn</p>
      </div>
      {currentPage}
    </div>
  )
}

const buttonStyle = {
  padding:"10px 20px", 
  border: "2px solid black", 
  width:"fit-content", 
  background:"rgba(223, 224,200,0.8)", 
  borderRadius:"5px", 
  cursor:"pointer"
}

export default App
