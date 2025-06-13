import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WasteWise",
  description: "Start Managing Waste Today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
