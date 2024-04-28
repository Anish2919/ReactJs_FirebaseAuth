import { useAuthState } from 'react-firebase-hooks/auth'
import {  Outlet, useNavigate } from 'react-router-dom'
import { auth } from '../../services/firebase/firebaseSetup'
import { useEffect } from 'react';

const UserExistance = () => {
    const [user] = useAuthState(auth); 
    const navigate = useNavigate(); 
    useEffect(() => {
        if(user) {
            navigate('/dashboard'); 
            return; 
        }
    }, [user, navigate]);
    
    return <Outlet/>
}

export default UserExistance
