// src/components/layout/Header.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Data navigasi kita pisahkan di sini
const menuItems = [
  { href: "/", label: "Home" },
  { href: "/upload", label: "Upload" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    router.push("/");
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Debug: tambahkan console.log untuk melihat state
  console.log("Mobile menu open:", mobileMenuOpen);

  return (
    <header className="bg-[#AAC87B]/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav
        className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/logo.png"
              alt="WasteWise Logo"
              width={200}
              height={200}
              className="w-auto h-16"
            />
          </Link>
        </div>

        {/* Tombol Burger Menu (hanya tampil di mobile) */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors border border-gray-300"
            onClick={() => {
              console.log("Burger clicked!"); // Debug
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Navigasi Utama (hanya tampil di desktop) */}
        <div className="hidden lg:flex lg:gap-x-12">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Tombol Login/Profil (hanya tampil di desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 items-center">
          {user ? (
            <>
              <Link
                href="/profile"
                className="text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Hi, {user.username}
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Panel Menu Mobile - Versi Sederhana untuk Debug */}
      <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 z-50 bg-white">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900"
              onClick={handleLinkClick}
            >
              WasteWise
            </Link>
            <button
              type="button"
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="p-4 space-y-4 bg-white">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-lg font-semibold text-gray-900 hover:bg-gray-100 rounded-lg"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}

            {/* Auth Section */}
            <div className="border-t pt-4 mt-4">
              {user ? (
                <>
                  <Link
                    href="/profile"
                    className="block py-3 px-4 text-lg font-semibold text-indigo-600 hover:bg-gray-100 rounded-lg"
                    onClick={handleLinkClick}
                  >
                    Hi, {user.username}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left py-3 px-4 text-lg font-semibold text-red-600 hover:bg-gray-100 rounded-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block py-3 px-4 text-lg font-semibold text-gray-900 hover:bg-gray-100 rounded-lg"
                    onClick={handleLinkClick}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="block py-3 px-4 text-lg font-semibold text-white bg-yellow-500 hover:bg-gray-100 rounded-lg"
                    onClick={handleLinkClick}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
