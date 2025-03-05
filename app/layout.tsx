import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Theme from "@/context/Theme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${josefinSans.className} antialiased`}>
        <Theme attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
