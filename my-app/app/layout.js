import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: {
    template: "%s | Rowan Hamdy",
    default: "Rowan Hamdy | Frontend Developer", 
  },
  
  description: "Frontend Developer showcasing expertise in React, Next.js, and modern web design. Explore my projects and professional experience.",
  keywords: ["Frontend Developer", "React", "Next.js", "Portfolio", "Web Development", "JavaScript"],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}   cz-shortcut-listen="true">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
