import { Inter } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "@/context";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Praca Ostrołęka",
    description: "non",
}


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppWrapper>
                    {children}
                </AppWrapper>
            </body>
        </html>
    );
}
