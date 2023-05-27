import React from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./contexts/AuthContexts/AuthContext";
import ProductContextProvider from "./contexts/AuthContexts/ProductContext";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <ProductContextProvider>
       <App />
       </ProductContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  
);
