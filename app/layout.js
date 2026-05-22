import "./globals.css";
import { CarritoProvider } from "./context/CarritoContext";

export const metadata = {
  title: "Tienda de Laptops",
  description: "POS en Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CarritoProvider>
          {children}
        </CarritoProvider>
      </body>
    </html>
  );
}
