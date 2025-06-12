// src/components/layout/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">WasteWise</span>
            <span className="text-2xl font-bold text-gray-900">WasteWise</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/education"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Education
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About us
          </Link>
          <Link
            href="/leaderboard"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Leaderboard
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-500 px-3.5 py-2.5 rounded-md transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
