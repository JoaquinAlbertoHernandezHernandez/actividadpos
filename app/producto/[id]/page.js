"use client";

import { use } from "react";
import { useState } from "react";
import Link from "next/link";
import { productos } from "@/datos/productos";
import { useCarrito } from "@/app/context/CarritoContext";

export default function Page({ params }) {

  const { carrito, agregarAlCarrito } = useCarrito();

  const [mensaje, setMensaje] = useState("");

  const parametros = use(params);
  const productoId = Number(parametros.id);

  const producto = productos.find(
    (p) => Number(p.id) === productoId
  );

  const agregarProducto = () => {

    agregarAlCarrito(producto);

    setMensaje("Producto agregado al carrito");

    setTimeout(() => {
      setMensaje("");
    }, 2000);

  };

  if (!producto) {

    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500">
            Producto no encontrado
          </h1>

          <Link
            href="/"
            className="mt-5 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            ← Volver al catálogo
        </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gray-400 border-b shadow-sm px-8 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-blue-600">
            Tienda de Laptops
          </h1>

          <p className="text-gray-800">
            Encuentra la laptop ideal para ti
          </p>
        </div>

        <Link
          href="/carrito"
          className="relative bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition">
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

     
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">

          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition">
            ← Volver al catálogo
          </Link>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
          <div className="bg-white rounded-2xl shadow-md p-8 flex items-center justify-center">

            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="h-[420px] object-contain hover:scale-105 transition duration-300"/>

          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">

              <h1 className="text-4xl font-bold text-gray-800">
                {producto.nombre}
              </h1>

              <p className="text-3xl font-bold text-blue-600 mt-4">
                ${producto.precio}
              </p>

              <p className="text-gray-500 mt-2">
                {producto.marca} • {producto.categoria}
              </p>
            </div>

            
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-5">
                Especificaciones
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">
                    RAM
                  </span>

                  <span className="font-semibold">
                    {producto.ram}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">
                    Pantalla
                  </span>

                  <span className="font-semibold">
                    {producto.pantalla}
                  </span>
                </div>
                <div className="flex justify-between border-b pb-3">

                  <span className="text-gray-500">
                    Procesador
                  </span>

                  <span className="font-semibold">
                    {producto.procesador}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">                  <span className="text-gray-500">
                    Almacenamiento
                  </span>

                  <span className="font-semibold">
                    {producto.almacenamiento}
                  </span>
                </div>
              </div>
            </div>

            
            <div className="flex gap-4">

              <button
                onClick={agregarProducto}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition">
                Agregar al carrito
              </button>

              <Link
                href="/carrito"
                className="flex-1 text-center bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 rounded-2xl font-bold text-lg transition">
                Ver carrito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
