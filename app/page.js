"use client";

import { useState } from "react";
import Link from "next/link";
import { productos } from "../datos/productos";
import { useCarrito } from "./context/CarritoContext";

export default function Home() {

  const [marca, setMarca] = useState("Todos");
  const [categoria, setCategoria] = useState("Todos");

  const [mensaje, setMensaje] = useState("");

  const {
    carrito,
    agregarAlCarrito
  } = useCarrito();


  const marcas = [
    "Todos",
    "HP",
    "Dell",
    "Lenovo",
    "ASUS",
    "Acer",
    "MSI",
    "Huawei",
    "Samsung"
  ];

 
  const categorias = [
    "Todos",
    "Gaming",
    "Oficina",
    "Touch",
    "Estudiantes",
    "Premium"
  ];


  const productosFiltrados = productos.filter((p) => {
    return (
      (marca === "Todos" || p.marca === marca) &&
      (categoria === "Todos" || p.categoria === categoria)
    );
  });

 
  const agregarProducto = (producto) => {
    agregarAlCarrito(producto);
    setMensaje("Producto agregado al carrito");
    setTimeout(() => {
      setMensaje("");
    }, 2000);
  };

  return (
    <main className="h-screen flex flex-col bg-gray-100 text-gray-900">
      <header className="bg-gray-400 border-b shadow-sm px-8 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-blue-600">
            Tienda de Laptops
          </h1>
    
        </div>
        <Link
          href="/carrito"
          className="relative bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition" >
          🛒 Carrito

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold">
            {carrito.length}
          </span>
        </Link>
      </header>

      {mensaje && (
         <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg z-50">
          {mensaje}
        </div>

      )}

    
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-72 bg-white border-r p-5 sticky top-0 h-screen overflow-y-auto">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            Filtros
          </h2>
          <p className="font-semibold mb-2">
            Marca
          </p>
          <div className="space-y-1 mb-6">
            {marcas.map((m) => (
              <button
                key={m}
                onClick={() => setMarca(m)}
                className={`w-full text-left px-3 py-2 rounded-lg transition ${
                  marca === m
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {m}
              </button>

            ))}

          </div>

          <p className="font-semibold mb-2">
            Categoría
          </p>
          <div className="space-y-1">

            {categorias.map((c) => (

              <button
                key={c}
                onClick={() => setCategoria(c)}
                className={`w-full text-left px-3 py-2 rounded-lg transition ${
                  categoria === c
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {c}
              </button>

            ))}

          </div>
        </aside>
        <section className="flex-1 overflow-y-auto p-8">

          <div className="bg-white rounded-2xl shadow p-8 mb-8 border"> 

            <h2 className="text-4xl font-bold text-blue-600 mb-2">
              Bienvenido - Encuentra tu Lap Top ideal para ti
            </h2>

          
          </div>  
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-blue-600">
              Catalogo de productos 
            </h2>
         </div>
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {productosFiltrados.map((p) => (

              <div
                key={p.id}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"   >

               
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="h-52 w-full object-contain p-4" />

               
                <div className="p-5">

                  <h3 className="font-bold text-lg">
                    {p.nombre}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {p.marca} • {p.categoria}
                  </p>

                  <p className="text-2xl font-bold text-blue-600 mt-3">
                    ${p.precio}
                  </p>

                  
                  <div className="flex gap-2 mt-5">

                    <Link
                      href={`/producto/${p.id}`}
                      className="flex-1 text-center bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-xl font-semibold transition"       >
                      Ver producto
                    </Link>

                    <button
                      onClick={() => agregarProducto(p)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition"              >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

