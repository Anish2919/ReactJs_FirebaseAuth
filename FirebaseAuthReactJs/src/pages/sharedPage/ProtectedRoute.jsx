import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, Outlet,  } from "react-router-dom";
import { auth } from "../../services/firebase/firebase";

const ProtectedRoute = () => {
    const [user, loading, error] = useAuthState(auth); 

    if(loading) return <div>Loading...</div>

    if(error) return <div>{error.message}</div>

    if(!user) {
        return <Navigate to='/' replace />; 
    }

  return <Outlet/>;
}

export default ProtectedRoute
