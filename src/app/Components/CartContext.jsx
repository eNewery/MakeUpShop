"use client"
import React, { createContext, useState } from 'react';

// Crea el contexto y proporciona un valor inicial (puede ser cualquier tipo de dato)
const MiContexto = createContext();
const MiContextoProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  /* Función para limpiar el carrito */
  function cleanCart() {
   setCart([]) 
  }
  /* Función para limpiar el carrito */
    return (
      <MiContexto.Provider value={{cart, setCart, cleanCart}}>
        {children}
      </MiContexto.Provider>
    );
  };
  export { MiContexto, MiContextoProvider };