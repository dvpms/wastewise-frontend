// src/components/layout/Footer.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  HeartIcon, 
  MapPinIcon, 
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon 
} from "@heroicons/react/24/outline";

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Upload', href: '/upload' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'About', href: '/about' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.316-1.296C4.165 14.81 3.617 13.713 3.617 12.5c0-1.214.548-2.311 1.516-3.193.868-.806 2.02-1.296 3.316-1.296 1.297 0 2.448.49 3.316 1.296.968.882 1.516 1.979 1.516 3.193 0 1.213-.548 2.31-1.516 3.192-.868.806-2.02 1.296-3.316 1.296zm7.718-4.488c0 .311-.127.593-.332.798-.205.205-.487.332-.798.332s-.593-.127-.798-.332a1.13 1.13 0 01-.332-.798c0-.311.127-.593.332-.798.205-.205.487-.332.798-.332s.593.127.798.332c.205.205.332.487.332.798z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-800">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="WasteWise Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-green-100 text-lg leading-relaxed mb-6 max-w-md">
              Bergabunglah dengan gerakan global untuk mengelola sampah dengan bijak. 
              Setiap tindakan kecil dapat membuat perbedaan besar untuk planet kita.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-green-200">
                <MapPinIcon className="w-5 h-5" />
                <span className="text-sm">Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-green-200">
                <EnvelopeIcon className="w-5 h-5" />
                <span className="text-sm">contact@wastewise.com</span>
              </div>
              <div className="flex items-center gap-3 text-green-200">
                <GlobeAltIcon className="w-5 h-5" />
                <span className="text-sm">www.wastewise.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-green-200 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Our Mission</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-green-200 text-sm">
                  Mengurangi limbah melalui teknologi AI
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-green-200 text-sm">
                  Edukasi masyarakat tentang pengelolaan sampah
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-green-200 text-sm">
                  Menciptakan lingkungan yang lebih bersih
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-green-600/30 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-green-200 mb-4 md:mb-0">
            <span className="text-sm">
              Made with
            </span>
            <HeartIcon className="w-4 h-4 text-red-400" />
            <span className="text-sm">
              for a cleaner world © {new Date().getFullYear()} WasteWise
            </span>
          </div>

          {/* Social links */}
          <div className="flex space-x-6">
            {navigation.social.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
