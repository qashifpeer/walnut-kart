import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { useContext, useState } from "react";


import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import WishList from "./pages/Wishlist/WishList";
import Store from "./pages/Store/Store";


import RequiresAuth from "./pages/Auth/RequiresAuth";
import  {AuthContext}  from "./contexts/AuthContexts/AuthContext";


function App() {
  

  return (
    <div className="App">
      <Navbar />
     
     {/* <button onClick={handleLogin}>{isLoggedIn ? "signout" : "login"  } </button> */}
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/store" element={<Store />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth >
                <WishList  />
              
            
            </RequiresAuth>
          }
        />
        
               
      </Routes>
    </div>
  );
}

export default App;
