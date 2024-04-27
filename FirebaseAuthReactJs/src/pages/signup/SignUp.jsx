import { useState } from "react";
import Input from "../../components/shared/Input";

const SignUp = () => {
    const [inputValue, setInputValue] = useState({ username: "", password: "" });
    const { username, password } = inputValue;

    const handleSubmit = (e) => {
        e.preventDefault();  
    }
  
    const handleChange = (e) => {
        const componentName = e.target.name; 
        const value = e.target.value; 
        setInputValue({...inputValue, [componentName]: value}); 
    };
  return (
    <div>
        <form onSubmit={handleSubmit} style={form}>
            <Input 
                type="text"
                handleChange={handleChange} 
                value={username} 
                label='username' /> 
            <Input
                 handleChange={handleChange} 
                 type="password" 
                 value={password}
                 label='password'/> 
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
    </div>
  )
}

const form = {
    display: "flex", 
    justifyContent: "center", 
    flexDirection: "column", 
    gap: "10px"
}

export default SignUp
