"use client";

import { useState } from "react";
import Link from "next/link";
import { useCarrito } from "../context/CarritoContext";

export default function CarritoPage() {

  const {
    carrito,
    eliminarDelCarrito,
    vaciarCarrito
  } = useCarrito();

  const [mensaje, setMensaje] = useState("");

  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio,
    0
  );

  const pagar = () => {

    setMensaje("Gracias por su compra");

    vaciarCarrito();

    setTimeout(() => {
      setMensaje("");
    }, 3000);
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
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          ← Volver al catalogo
        </Link>

      </header>

      
      {mensaje && (

        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 font-semibold">

          {mensaje}

        </div>

      )}

      <div className="flex flex-1 overflow-hidden">
     <aside className="w-80 bg-white border-r p-5 sticky top-0 h-screen overflow-y-auto">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            Resumen
          </h2>

          <div className="space-y-4">        
            <div className="bg-gray-100 p-5 rounded-2xl">

              <p className="text-gray-500 text-sm">
                Productos agregados
              </p>

              <h3 className="text-4xl font-bold text-blue-600 mt-2">
                {carrito.length}
              </h3>
            </div>

            
            <div className="bg-gray-100 p-5 rounded-2xl">

              <p className="text-gray-500 text-sm">
                Total a pagar
              </p>

              <h3 className="text-3xl font-bold text-blue-600 mt-2">
                ${total}
              </h3>
            </div>

           
            {carrito.length > 0 && (

              <button
                onClick={pagar}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition"           >
                Pagar
              </button>

            )}

            
            {carrito.length > 0 && (

              <button
                onClick={vaciarCarrito}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
              >
                Vaciar carrito
              </button>

            )}

           
            <Link
              href="/"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Seguir comprando
            </Link>
          </div>
        </aside>

      
        <section className="flex-1 overflow-y-auto p-8">

          
          <div className="bg-white rounded-2xl shadow p-8 mb-8 border">

            <h2 className="text-4xl font-bold text-blue-600 mb-2">
              Carrito de compras
            </h2>

            <p className="text-gray-600 text-lg">
              Revisa los productos antes de finalizar tu compra
            </p>
          </div>

         
          {carrito.length === 0 ? (

            <div className="bg-white rounded-2xl shadow p-12 text-center">

              <h2 className="text-3xl font-bold text-gray-700 mb-3">
                Tu carrito esta vacio
              </h2>

              <p className="text-gray-500 mb-8">
                Agrega productos desde el catalogo
              </p>

              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"  >
                Ir al catálogo
              </Link>
            </div>

          ) : (

            <div className="space-y-6">
              {carrito.map((producto, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 flex gap-6"   >

                  
                  <div className="bg-white-100 rounded-2xl p-4 flex items-center justify-center">

                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-40 h-40 object-contain"
                    />

                  </div>

                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {producto.nombre}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      {producto.marca} • {producto.categoria}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-100 rounded-xl p-3">
                        <p className="text-gray-500 text-sm">
                          RAM
                        </p>
                        <p className="font-bold">
                          {producto.ram}
                        </p>
                      </div>

                      <div className="bg-gray-100 rounded-xl p-3">
                        <p className="text-gray-500 text-sm">
                          Procesador
                        </p>
                        <p className="font-bold">
                          {producto.procesador}
                        </p>
                      </div>

                      <div className="bg-gray-100 rounded-xl p-3">
                        <p className="text-gray-500 text-sm">
                          Pantalla
                        </p>
                        <p className="font-bold">
                          {producto.pantalla}
                        </p>
                      </div>
                      <div className="bg-gray-100 rounded-xl p-3">
                        <p className="text-gray-500 text-sm">
                          Almacenamiento
                        </p>
                        <p className="font-bold">
                          {producto.almacenamiento}
                        </p>
                      </div>
                    </div>
                  </div> 

                  <div className="text-right flex flex-col justify-between">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">
                        ${producto.precio}
                      </p>
                    </div>
                    <button
                      onClick={() => eliminarDelCarrito(index)}
                      className="mt-6 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl font-semibold transition" >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}