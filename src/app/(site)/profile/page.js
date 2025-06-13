// src/app/(main)/profile/page.js
"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import { CameraIcon } from "@heroicons/react/24/solid";

export default function ProfilePage() {
  const { user, loading: authLoading, login } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("authToken");
      const payload = {};
      if (username !== user.username) payload.username = username;
      if (newPassword) payload.password = newPassword;

      if (Object.keys(payload).length === 0) {
        Swal.fire("Info", "Tidak ada perubahan data untuk disimpan.", "info");
        setLoading(false);
        return;
      }

      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/profile`;
      await axios.patch(apiUrl, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      await login(token);

      Swal.fire("Sukses!", "Profil berhasil diperbarui.", "success");
      setNewPassword("");
    } catch (error) {
      const message =
        error.response?.data?.message || "Gagal memperbarui profil.";
      Swal.fire("Oops...", message, "error");
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || !user) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Profil</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Kolom Kiri: Form */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <form onSubmit={handleUpdateProfile} className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    // PERBAIKAN: Menambahkan warna background dan teks secara eksplisit
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 text-gray-900 p-3"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email (tidak dapat diubah)
                  </label>
                  <p className="mt-2 text-gray-800 bg-gray-100 p-3 rounded-md">
                    {user.email}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="newPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password Baru
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Isi jika ingin mengubah password"
                    // PERBAIKAN: Menambahkan warna background dan teks secara eksplisit
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 text-gray-900 p-3"
                  />
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-800 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-green-900 disabled:bg-gray-400"
                  >
                    {loading ? "Menyimpan..." : "Update"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Kolom Kanan: Gambar Profil */}
          <div className="flex flex-col items-center pt-8">
            <div className="relative">
              <img
                className="h-40 w-40 rounded-full object-cover border-4 border-white shadow-lg"
                src="/profile-placeholder.png"
                alt="Profile picture"
              />
              <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                <CameraIcon className="h-5 w-5 text-gray-600" />
                <span className="sr-only">Ubah gambar profil</span>
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-gray-600">Total Poin</p>
              <p className="font-bold text-3xl text-green-700">{user.points}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
