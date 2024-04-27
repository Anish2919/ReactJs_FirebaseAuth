// import { useState } from 'react'
import './App.css'
// import SignUp from './pages/signup/SignUp';
// import SignIn from './pages/signin/SignIn';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { logout } from './services/firebase/firebase';
import useAuthorizedHook from './services/firebase/hooks/useAuthorizedHook';


function App() {
  const navigate = useNavigate(); 

  const {user} = useAuthorizedHook(); 
  
  function loggingOut() {
    logout(); 
    navigate('/'); 
  }
  return (
    <div>
      <h1>Home Page</h1>
      <div className='flexbox'>
        {user ? (
          <button className='linkStyle' onClick={loggingOut}>Logout</button>
        ): (
          <>
            <Link className="linkStyle" to='/'>Sign In</Link>
            <Link className='linkStyle' to='/signup'>Sign Up</Link>
          </>
        )}
      </div>
      {<Outlet/>}
    </div>
  )
}



// const buttonStyle = {
//   padding:"10px 20px", 
//   border: "2px solid black", 
//   width:"fit-content", 
//   background:"rgba(223, 224,200,0.8)", 
//   borderRadius:"5px", 
//   cursor:"pointer"
// }

export default App
