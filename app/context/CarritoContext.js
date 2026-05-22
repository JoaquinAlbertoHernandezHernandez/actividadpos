"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {

  const [carrito, setCarrito] = useState([]);

 
  useEffect(() => {

    const carritoGuardado =
      localStorage.getItem("carrito");

    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }

  }, []);


  useEffect(() => {

    localStorage.setItem(
      "carrito",
      JSON.stringify(carrito)
    );

  }, [carrito]);


  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

 
  const eliminarDelCarrito = (indexProducto) => {

    setCarrito((prev) =>
      prev.filter(
        (_, index) => index !== indexProducto
      )
    );

  };

  
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContext);
}