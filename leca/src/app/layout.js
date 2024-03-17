import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import Head from "next/head";
import Script from "next/script";
const mainFont = localFont({src :'./assets/Utendo-ExtraBold.ttf',
                            display:'swap',})


export const metadata = {
  title: "Leca Indumentaria",
  description: "Leca Indumentaria es una fábrica textil con experiencia en el mercado, destaca por su calidad y simpleza y eficiencia a la hora de trabajar con sus clientes",
  
};

export default function RootLayout({ children }) {
  return (
    <html className=" bg-main-bg scroll-smooth  " lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
