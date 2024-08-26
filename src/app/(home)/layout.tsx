import { Inter } from "next/font/google";
import "../globals.css";
import Nav from "@/components/navbar/Nav";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
