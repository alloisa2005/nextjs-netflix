import { Inter } from "next/font/google";
import NextAuthProvider from "./components/NextAuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix Clone",
  description: "Developed with Next JS 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider> {children} </NextAuthProvider>
      </body>
    </html>
  );
}
