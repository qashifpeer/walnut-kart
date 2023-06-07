import React from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./contexts/AuthContexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";
import CartContextProvider from "./contexts/CartContext";
import WishListContextProvider from "./contexts/WishListContext";
import FilterContextProvider from "./contexts/FilterContext";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
          <FilterContextProvider>
            <CartContextProvider>
              <WishListContextProvider>
                <App />
              </WishListContextProvider>
            </CartContextProvider>
          </FilterContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
