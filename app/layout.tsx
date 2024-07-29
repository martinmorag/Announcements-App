import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Announcements",
  description: "Here you will find announcements that are able to be published and edited according to the client's needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
