import type { Metadata } from "next";
import HeaderComponent from "@/library/components/header/HeaderComponent";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blogemi",
  description: "View recent blogs created by Blogemi users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        <main>{children}</main>
      </body>
    </html>
  );
}
