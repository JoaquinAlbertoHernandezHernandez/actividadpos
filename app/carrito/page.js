"use client";

import Link from "next/link";
import { useCarrito } from "../context/CarritoContext";

export default function CarritoPage() {

  const { carrito, eliminarDelCarrito } = useCarrito();

  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio,
    0
  );

  return (
    <main className="min-h-screen flex bg-gray-100 text-gray-900">

    
      <aside className="w-72 bg-white border-r p-5">

        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Carrito
        </h2>

        <div className="space-y-4">

          <div className="bg-gray-100 p-4 rounded-xl">

            <p className="text-gray-500 text-sm">
              Productos agregados
            </p>

            <h3 className="text-3xl font-bold text-blue-600">
              {carrito.length}
            </h3>

          </div>

          <div className="bg-gray-100 p-4 rounded-xl">

            <p className="text-gray-500 text-sm">
              Total a pagar
            </p>

            <h3 className="text-2xl font-bold text-blue-600">
              ${total}
            </h3>

          </div>

          <Link
            href="/"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            ← Seguir comprando
          </Link>

        </div>

      </aside>

      {/* contenidoo */}
      <section className="flex-1 p-8">

        {/* header */}
        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold text-blue-600">
              Carrito de compras
            </h1>

            <p className="text-gray-600">
              Productos seleccionados
            </p>

          </div>

        </div>

        {/* si el carrito esta vacio */}
        {carrito.length === 0 ? (

          <div className="bg-white rounded-xl shadow p-10 text-center">

            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              Tu carrito está vacío
            </h2>

            <p className="text-gray-500 mb-6">
              Agrega productos desde el catálogo
            </p>

            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Ir al catálogo
            </Link>

          </div>

        ) : (

          <div className="space-y-5">

            {carrito.map((producto, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex items-center gap-5"
              >

                {/* img */}
                <div className="bg-white-100 rounded-xl p-3">

                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-28 h-28 object-contain"
                  />

                </div>

                {/* info */}
                <div className="flex-1">

                  <h2 className="text-xl font-bold text-gray-800">
                    {producto.nombre}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    {producto.marca} • {producto.categoria}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">

                    <p>
                      <span className="font-semibold">
                        RAM:
                      </span>{" "}
                      {producto.ram}
                    </p>

                    <p>
                      <span className="font-semibold">
                        Procesador:
                      </span>{" "}
                      {producto.procesador}
                    </p>

                  </div>

                </div>

                {/* precios */}
                <div className="text-right">

                  <p className="text-2xl font-bold text-blue-600">
                    ${producto.precio}
                  </p>

                  <p className="text-sm text-gray-400 mt-1">
                    Precio unitario
                  </p>

                  <button
                    onClick={() => eliminarDelCarrito(index)}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                  >
                    Eliminar
                  </button>

                </div>

              </div>

            ))}

          </div>
      
        )}

      </section>

    </main>
  );
}