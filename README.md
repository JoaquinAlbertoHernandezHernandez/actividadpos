
---Documento como se Ejecuta el Proyecto---


* Tienda de Laptops

* ¿Qus es el proyecto?

Este proyecto consiste en una tienda virtual de laptops desarrollada con Next.js.  
La psgina permite visualizar diferentes laptops, consultar sus especificaciones y realizar una simulación de compra mediante un carrito.

El objetivo del proyecto es mostrar el funcionamiento bssico de un sistema de catálogo y carrito de compras moderno.


* Tecnologías utilizadas

- Next.js
- React
- Tailwind CSS
- JavaScript
- LocalStorage


* Funciones principales

- Mostrar un catalogo de laptops
- Filtrar productos por marca
- Filtrar productos por categoria
- Visualizar detalles completos de cada laptop
- Agregar productos al carrito
- Eliminar productos del carrito
- Vaciar carrito
- Mantener productos guardados al recargar la pagina
- Mostrar total de compra
- Simular pago mostrando mensaje de compra exitosa



¿Como usar la página?

1. Al ingresar a la pagina principal, el usuario puede visualizar todas las laptops disponibles.

2. En la parte izquierda se encuentran los filtros de marca y categoria para facilitar la busqueda de productos.

3. Cada producto muestra:
     - Imagen
     - Nombre
     - Categoria
     - Precio
     - Boton para ver detalles
     - Boton para agregar al carrito

4. Al seleccionar "Ver producto", se abre una pantalla con informacion completa de la laptop:
     - RAM
     - Procesador
     - Pantalla
     - Almacenamiento

5. El usuario puede agregar productos al carrito desde:
     - El catalogo
     - La pantalla de detalle

6.En la seccion del carrito se pueden:
     - Visualizar los productos agregados
     - Consultar el total a pagar
     - Eliminar productos
     - Vaciar carrito
     - Simular la compra mediante el botón "Pagar"

7. Al finalizar la compra, el sistema muestra un mensaje de agradecimiento y limpia automaticamente el carrito.


-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
