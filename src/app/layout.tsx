import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

//for layout
import Navbar from "@/Layout/Navbar/Navbar";

export const metadata: Metadata = {
  title: "SSN",
  description: "Better than Craigslist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
