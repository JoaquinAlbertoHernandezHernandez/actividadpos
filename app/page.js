"use client";

import { useState } from "react";
import { productos } from "../datos/productos";

export default function Home() {

  const [marca, setMarca] = useState("Todos");
  const [categoria, setCategoria] = useState("Todos");

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

  // para filtrar los productos 
  const productosFiltrados = productos.filter((producto) => {
    return (
      (marca === "Todos" || producto.marca === marca) &&
      (categoria === "Todos" || producto.tipo === categoria)
    );
  });

  return (

    <main className="min-h-screen bg-gray-100 flex text-gray-900">

      {/* sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 p-5">

        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Filtrar por
        </h2>

        {/* para el filtro de marcas */}
        <p className="font-semibold text-gray-800 mb-2">
          Marca
        </p>

        <div className="space-y-1 mb-6">

          {marcas.map((m) => (

            <button
              key={m}
              onClick={() => setMarca(m)}
              className={`w-full text-left px-3 py-2 rounded-lg transition font-medium ${
                marca === m
                  ? "bg-blue-600 text-white"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              {m}
            </button>

          ))}

        </div>

        {/* para el filtro de categorias */}
        <p className="font-semibold text-gray-800 mb-2">
          Categoría
        </p>

        <div className="space-y-1">

          {categorias.map((c) => (

            <button
              key={c}
              onClick={() => setCategoria(c)}
              className={`w-full text-left px-3 py-2 rounded-lg transition font-medium ${
                categoria === c
                  ? "bg-blue-600 text-white"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              {c}
            </button>

          ))}

        </div>

      </aside>

      {/* contenido */}
      <section className="flex-1 p-8">

        {/* header */}
        <div className="mb-6">

          <h1 className="text-3xl font-bold text-blue-600">
            Tienda de Laptops
          </h1>

          <p className="text-gray-600">
            Catálogo de productos disponibles
          </p>

        </div>

        {/* productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {productosFiltrados.map((producto) => (

            <div
              key={producto.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden"
            >

              {/* imagenes */}
              <div className="h-44 bg-white flex items-center justify-center">

                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-contain p-3 hover:scale-105 transition duration-300"
                />

              </div>

              {/* descripcion del producto */}
              <div className="p-4">

                <h3 className="font-semibold text-gray-900 text-lg">
                  {producto.nombre}
                </h3>

                <p className="text-blue-600 font-bold text-xl mt-1">
                  ${producto.precio}
                </p>

                <div className="mt-2 text-sm text-gray-700">

                  <p>
                    Marca:{" "}
                    <span className="font-medium">
                      {producto.marca}
                    </span>
                  </p>

                  <p>
                    Categoría:{" "}
                    <span className="font-medium">
                      {producto.tipo}
                    </span>
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>

  );
}
/* import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.js file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
 */