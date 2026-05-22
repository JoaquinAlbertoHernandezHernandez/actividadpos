"use client";

import { use } from "react";
import Link from "next/link";
import { productos } from "@/datos/productos";
import { useCarrito } from "@/app/context/CarritoContext";

export default function Page({ params }) {

  const { agregarAlCarrito } = useCarrito();

  const parametros = use(params);
  const productoId = Number(parametros.id);

  const producto = productos.find(
    (p) => Number(p.id) === productoId
  );

  if (!producto) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">

        <div className="text-center">

          <h1 className="text-2xl font-bold text-red-500">
            Producto no encontrado
          </h1>

          <Link
            href="/"
            className="mt-5 inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold"
          >
            ← Volver al catalogo
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">

        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          ← Volver al catálogo
        </Link>

      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-10">

        <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center">

          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="h-[420px] object-contain hover:scale-105 transition"
          />

        </div>

        <div className="space-y-4">

          <div className="bg-white rounded-xl shadow-md p-6">

            <h1 className="text-3xl font-bold text-gray-800">
              {producto.nombre}
            </h1>

            <p className="text-2xl font-bold text-blue-600 mt-2">
              ${producto.precio}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {producto.marca} • {producto.categoria}
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">

            <h2 className="text-lg font-bold text-gray-700">
              Especificaciones
            </h2>

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">RAM</span>
              <span className="font-semibold">
                {producto.ram}
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Pantalla</span>
              <span className="font-semibold">
                {producto.pantalla}
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Procesador</span>
              <span className="font-semibold">
                {producto.procesador}
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">
                Almacenamiento
              </span>

              <span className="font-semibold">
                {producto.almacenamiento}
              </span>
            </div>

          </div>

          <button
            onClick={() => agregarAlCarrito(producto)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition"
          >
            Agregar al carrito
          </button>

        </div>

      </div>
    </main>
  );
}
/* import { productos } from "@/datos/productos";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = await params;
  const productoId = Number(id);

  const producto = productos.find((p) => Number(p.id) === productoId);

  if (!producto) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">
            Producto no encontrado
          </h1>

          <Link
            href="/"
            className="mt-5 inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold"
          >
            ← Volver al catálogo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      {/* header *//*}
      <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">

        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          ← Volver al catálogo
        </Link>

        <h2 className="text-sm text-gray-500">
          
        </h2>
      </div>

      {/* contenidooo *//*}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-10">

        {/* img *//*}
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="h-[420px] object-contain hover:scale-105 transition"
          />
        </div>

       
        <div className="space-y-4">

          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-800">
              {producto.nombre}
            </h1>

            <p className="text-2xl font-bold text-blue-600 mt-2">
              ${producto.precio}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {producto.marca} • {producto.categoria}
            </p>
          </div>

          
          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">

            <h2 className="text-lg font-bold text-gray-700">
              Especificaciones
            </h2>

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">RAM</span>
              <span className="font-semibold">{producto.ram}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Pantalla</span>
              <span className="font-semibold">{producto.pantalla}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Procesador</span>
              <span className="font-semibold">{producto.procesador}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Almacenamiento</span>
              <span className="font-semibold">{producto.almacenamiento}</span>
            </div>

          </div>

          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition">
            Agregar al carrito
          </button>

        </div>
      </div>
    </main>
  );
} */