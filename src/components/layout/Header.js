// src/components/layout/Header.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Bars3Icon, XMarkIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

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
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    router.push("/");
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div 
          className="flex lg:flex-1"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/logo.png"
              alt="WasteWise Logo"
              width={200}
              height={200}
              className="w-auto h-12 lg:h-14"
            />
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            className={`inline-flex items-center justify-center rounded-lg p-2.5 transition-colors ${
              scrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  scrolled 
                    ? 'text-gray-700 hover:text-green-600' 
                    : 'text-white hover:text-green-300'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
          {user ? (
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                href="/profile"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  scrolled 
                    ? 'text-green-600 hover:text-green-700' 
                    : 'text-green-300 hover:text-green-200'
                }`}
              >
                <UserCircleIcon className="w-5 h-5" />
                Hi, {user.username}
              </Link>
              <Button
                onClick={handleLogout}
                variant="destructive"
                size="sm"
              >
                Logout
              </Button>
            </motion.div>
          ) : (
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                href="/login"
                className={`text-sm font-medium transition-colors ${
                  scrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                Login
              </Link>
              <Link href="/register">
                <Button size="sm">
                  Sign Up
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <Link href="/" onClick={handleLinkClick}>
                  <Image
                    src="/logo.png"
                    alt="WasteWise Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                <motion.button
                  type="button"
                  className="rounded-lg p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <XMarkIcon className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="px-6 py-6 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-base font-medium text-gray-900 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Auth Section */}
              <div className="border-t p-6">
                {user ? (
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 py-3 px-4 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      <UserCircleIcon className="w-6 h-6" />
                      Hi, {user.username}
                    </Link>
                    <Button
                      onClick={handleLogout}
                      variant="destructive"
                      className="w-full"
                    >
                      Logout
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="/login"
                      className="block py-3 px-4 text-center text-gray-900 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"
                      onClick={handleLinkClick}
                    >
                      Login
                    </Link>
                    <Link href="/register" onClick={handleLinkClick}>
                      <Button className="w-full">
                        Sign Up
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
