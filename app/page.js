"use client";

import { useState } from "react";
import Link from "next/link";
import { productos } from "../datos/productos";

export default function Home() {
  const [marca, setMarca] = useState("Todos");
  const [categoria, setCategoria] = useState("Todos");

  const marcas = ["Todos","HP","Dell","Lenovo","ASUS","Acer","MSI","Huawei","Samsung"];
  const categorias = ["Todos","Gaming","Oficina","Touch","Estudiantes","Premium"];

  const productosFiltrados = productos.filter((p) => {
    return (
      (marca === "Todos" || p.marca === marca) &&
      (categoria === "Todos" || p.categoria === categoria)
    );
  });

  return (
    <main className="min-h-screen flex bg-gray-100 text-gray-900">

      <aside className="w-72 bg-white border-r p-5">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Filtros</h2>

        <p className="font-semibold mb-2">Marca</p>
        <div className="space-y-1 mb-6">
          {marcas.map((m) => (
            <button
              key={m}
              onClick={() => setMarca(m)}
              className={`w-full text-left px-3 py-2 rounded-lg ${
                marca === m ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <p className="font-semibold mb-2">Categoría</p>
        <div className="space-y-1">
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setCategoria(c)}
              className={`w-full text-left px-3 py-2 rounded-lg ${
                categoria === c ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </aside>

     
      <section className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-blue-600 mb-2">
          Tienda de Laptops
        </h1>
        <p className="mb-6 text-gray-600">Catálogo de productos</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {productosFiltrados.map((p) => (
            <Link
              key={p.id}
              href={`/producto/${p.id}`}
              className="bg-white rounded-xl shadow hover:shadow-xl transition"
            >
              <img
                src={p.imagen}
                className="h-44 w-full object-contain p-3"
              />

              <div className="p-4">
                <h3 className="font-bold">{p.nombre}</h3>
                <p className="text-blue-600 font-bold">${p.precio}</p>
                <p className="text-sm text-gray-500">
                  {p.marca} • {p.categoria}
                </p>
              </div>
            </Link>
          ))}

        </div>

      </section>
    </main>
  );
}

 /*
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