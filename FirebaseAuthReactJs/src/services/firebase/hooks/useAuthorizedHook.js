import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"

const useAuthorizedHook = () => {
    const [user, loading, error] = useAuthState(auth); 

    return {
        user, 
        loading, 
        error
    }
    }

export default useAuthorizedHook; 
