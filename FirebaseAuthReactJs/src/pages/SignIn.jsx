import { useEffect, useState } from "react";
import Input from "../components/shared/Input";
import { loginWithEmailandPassword, loginWithGoogle } from "../services/firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase/firebaseSetup";


const SignIn = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
    const { email, password } = inputValue;

    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const componentName = e.target.name; 
        const value = e.target.value; 
        setInputValue({...inputValue, [componentName]: value}); 
    };

    // firebase auth 
    const [user] = useAuthState(auth); 

    // working with firebase 
    useEffect(() => {
      if(user) {
        navigate('/dashboard'); 
      }
    }, [user, navigate]); 


    const handleLoginWithGoogle = (e) => {
      e.preventDefault(); 
      loginWithGoogle(); 
    }

    const handleLoginWithEmailandPassword = (e) => {
      e.preventDefault(); 
      loginWithEmailandPassword(email, password); 
    }

  return (
    <>
      <h1>SinIn Form</h1>
       <form style={form}>
            <Input 
                type="email"
                handleChange={handleChange} 
                value={email} 
                label='email' /> 
            <Input
                 handleChange={handleChange} 
                 type="password" 
                 value={password}
                 label='password'/> 
            <div>
                <button onClick={handleLoginWithEmailandPassword}>Login with Email and Password</button>
                <button onClick={handleLoginWithGoogle}>Login with Google</button>
            </div>
            <div>
                Forgot Password? <Link to="/reset">click here</Link>
            </div>
        </form>
    </>
  )
}

const form = {
  display: "flex", 
  justifyContent: "center", 
  flexDirection: "column", 
  gap: "10px"
}

export default SignIn
