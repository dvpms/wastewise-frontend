// src/app/(auth)/register/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2"; // <-- 1. Impor SweetAlert2

export default function RegisterPage() {
  // Kita tidak perlu state 'error' lagi karena akan ditangani oleh Swal
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`;
      await axios.post(apiUrl, { username, email, password });

      // 2. Tampilkan popup sukses
      Swal.fire({
        title: "Success!",
        text: "Registration successful!",
        icon: "success",
        timer: 2000, // Popup akan tertutup otomatis setelah 2 detik
        showConfirmButton: false,
        willClose: () => {
          router.push("/login"); // Arahkan ke login setelah popup tertutup
        },
      });
    } catch (err) {
      const message =
        err.response?.data?.message || "Registration failed. Please try again.";

      // 3. Tampilkan popup error
      Swal.fire({
        title: "Error!",
        text: message,
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#4f46e5", // Contoh kustomisasi warna tombol
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/login-bg.jpg')" }}
    >
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-6">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ... form fields tidak berubah ... */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                placeholder="Choose a username"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="6"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                placeholder="Create a password"
              />
            </div>

            {/* Kita tidak perlu lagi menampilkan error di sini */}
            {/* {error && ...} */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {/* ... button text ... */}
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500 bg-white">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-green-600 hover:text-green-700 transition-colors duration-200"
              >
                Sign In here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
