// src/context/AuthContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cek token saat aplikasi pertama kali dimuat
    const token = localStorage.getItem("authToken");
    if (token) {
      // Jika ada token, validasi ke server untuk mendapatkan data user
      axios
        .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data.data.user);
        })
        .catch(() => {
          // Jika token tidak valid, hapus dari local storage
          localStorage.removeItem("authToken");
          setUser(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    // Setelah login, kita bisa langsung fetch profile
    // atau biarkan useEffect di atas yang menanganinya saat reload
    // Untuk UX yang lebih cepat, kita fetch di sini juga
    return axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data.data.user);
      });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook untuk mempermudah penggunaan context
export const useAuth = () => {
  return useContext(AuthContext);
};
