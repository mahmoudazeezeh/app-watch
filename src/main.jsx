import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserProvider } from './contexts/UserContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './Components/ShopContext/ShopContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ShopContextProvider>
          <App />
        </ShopContextProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);