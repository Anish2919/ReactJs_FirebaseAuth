import {  useState } from "react";
import {  resetPassword } from "../services/firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase/firebaseSetup";

const Reset = () => {
    const [email, setEmail] = useState("");
    const [user] = useAuthState(auth); 
    const navigate = useNavigate();

    if(user) navigate('/dashboard'); 
  return (
    <div className="reset">
      <div className="reset__container">
        <input
          type="email"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="reset__btn"
          onClick={() => resetPassword(email)}
        >
          Send password reset email
        </button>
        <div>
          Donot have an account? <Link to="/signup">Register</Link> now.
        </div>
      </div>
    </div>
  )
}

export default Reset
