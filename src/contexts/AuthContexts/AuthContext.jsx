import React, { createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
   const location = useLocation();
    const navigate = useNavigate();
   
    const [isLoggedIn, setLoggedIn] = useState(false);
   
    
    const handleLogin=()=>{
        setLoggedIn(!isLoggedIn);
        navigate("/wishlist");
        console.log("location",location.state.from.pathname)
    }
    
  return (
    <div>
        <AuthContext.Provider value={{isLoggedIn, handleLogin}}>
            {children}
        </AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider