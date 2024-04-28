import { useState } from "react";
import Input from "../components/shared/Input";
import { Link } from "react-router-dom";
import { loginWithGoogle, registerWithEmailandPassword } from "../services/firebase/firebase";

const SignUp = () => {
    // creating state for storing the input value
    const [inputValue, setInputValue] = useState({ name: "",email:"", password: "", confirmPasword: "" });
    // destructuring inputValue
    const { name, password, confirmPasword, email } = inputValue;

    // handling change when the user enters something on the input box
    const handleChange = (e) => {
        const componentName = e.target.name; 
        const value = e.target.value; 
        setInputValue({...inputValue, [componentName]: value}); 
    };

    // handling submit button
    const signupwithemailandpassword = async(e) => {
        e.preventDefault(); 
        if(!name || !password || !email || !confirmPasword) {
            alert('please complete all the fields before singing up!'); 
            return; 
        } 
        if(password !== confirmPasword) {
            alert('Password and Confirm Password didnot match!'); 
            return; 
        }

        await registerWithEmailandPassword(name, email, password); 
     }
  

    // signup with google 
    const registerWithGoogle = async(e) => {
        e.preventDefault(); 
        await loginWithGoogle(); 
    }
  return (
    <>
        <h1>Sign Up form</h1>
        <div className="flexbox">
            <form style={form}>
                <Input 
                    type="text"
                    handleChange={handleChange} 
                    value={name} 
                    label='name'
                    placeholder="Full Name" /> 
                <Input 
                    type="email"
                    handleChange={handleChange} 
                    value={email} 
                    label='email'
                    placeholder="email address" /> 
                <Input
                    handleChange={handleChange} 
                    type="password" 
                    value={password}
                    label='password'/> 
                <Input 
                    type="password"
                    handleChange={handleChange} 
                    value={confirmPasword} 
                    label='confirmPasword'
                    /> 
                <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
                    <button onClick={signupwithemailandpassword} >Sign up</button>
                    <button onClick={registerWithGoogle} >Register with Google</button>
                </div>
                <div>
                    <p>Already Have An Account? <Link to='/'><span style={{marginLeft:"10px"}}>Login here</span></Link></p>
                </div>
            </form>
        </div>
    </>
  )
}

const form = {
    display: "flex", 
    justifyContent: "center", 
    flexDirection: "column", 
    gap: "10px", 
    backgroundColor:"rgba(233,200,203,0.8)", 
    border:"1px solid black", 
    borderRadius:"5px", 
    width:"400px", 
    padding:"20px 20px", 
}

export default SignUp
