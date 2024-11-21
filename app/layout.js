import localFont from "next/font/local";
import {CartProvider} from "@/app/Context/CartContext"
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}
