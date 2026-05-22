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

/* import "./globals.css";
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
*/
/*import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tienda De Tecnologia",
  description: "Actividad de POS",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
*/