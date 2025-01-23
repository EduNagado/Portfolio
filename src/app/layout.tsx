import type { Metadata } from "next";
import "./globals.css";
import 'boxicons/css/boxicons.min.css';
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";


export const metadata: Metadata = {
  title: "Eduardo Nagado",
  description: "Meu Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
