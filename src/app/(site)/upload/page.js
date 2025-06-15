// src/app/(main)/upload/page.js
"use client";

import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { PhotoIcon, XMarkIcon, SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  // --- Protected Route Logic ---
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.[0]) {
      const currentFile = acceptedFiles[0];
      setFile(currentFile);
      setPreview(URL.createObjectURL(currentFile));
      setResult(null); // Reset hasil sebelumnya
    }
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true, // Menonaktifkan klik pada area dropzone
    noKeyboard: true,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  const removeFile = () => {
    setFile(null);
    setPreview("");
    setResult(null);
  };

  const handleClassify = async () => {
    if (!file) return;
    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("image", file);

    const token = localStorage.getItem("authToken");
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/classify`;

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResult(response.data);
      Swal.fire(
        "Sukses!",
        `Anda mendapatkan ${response.data.pointsAwarded} poin`,
        "success"
      );
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      const message =
        error.response?.data?.message || "Gagal melakukan klasifikasi.";
      Swal.fire("Oops...", message, "error");
      setResult({ Error: message });
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || !user) {
    return <div className="text-center p-10">Loading...</div>;
  }
  console.log(result);

  return (
    // Area dropzone mencakup seluruh halaman
    <div
      {...getRootProps({
        className:
          "flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center p-4",
      })}
    >
      <input {...getInputProps()} />
      {/* Tampilan sebelum ada file */}
      {!file && (
        <>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Foto dan kenali jenis sampah kamu
          </h1>
          <button
            type="button"
            onClick={open} // Tombol ini sekarang memicu dialog file
            className="mt-8 rounded-full bg-blue-500 px-10 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Upload Image
          </button>
          <p className="mt-4 text-gray-500">
            or drop a file, paste image or URL
          </p>
        </>
      )}
      {/* Tampilan setelah ada file */}
      {file && (
        <div className="w-full max-w-lg">
          <div className="relative">
            <Image
              src={preview}
              alt="Pratinjau"
              width={500}
              height={500}
              className="w-full rounded-lg shadow-lg"
              onLoad={() => URL.revokeObjectURL(preview)}
            />
            <button
              onClick={removeFile}
              className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          <button
            onClick={handleClassify}
            disabled={loading}
            className="mt-6 rounded-full bg-green-600 px-10 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105 disabled:bg-gray-400"
          >
            {loading ? "Menganalisis..." : "Klasifikasi Sekarang"}
          </button>
        </div>
      )}
      {/* Tampilan Hasil Klasifikasi */}
      {result && (
        <div className="mt-8 w-full max-w-lg p-8 border-2 rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-xl text-left transform transition-all hover:scale-[1.02]">
          <h3 className="font-bold text-2xl flex items-center text-blue-700 mb-4">
            <SparklesIcon className="h-6 w-6 mr-3 text-yellow-500 animate-pulse" />
            Hasil Klasifikasi
          </h3>
          {result.Error ? (
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-600 font-medium">{result.Error}</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                <p className="flex items-center">
                  <span className="font-semibold text-blue-800 w-32">
                    Kategori:
                  </span>
                  <span className="text-gray-700">{result.Kategori}</span>
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors">
                <p className="flex items-center">
                  <span className="font-semibold text-green-800 w-32">
                    Jenis:
                  </span>
                  <span className="text-gray-700">{result.Jenis}</span>
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg hover:bg-purple-100 transition-colors">
                <p className="flex items-center">
                  <span className="font-semibold text-purple-800 w-32">
                    Akurasi:
                  </span>
                  <span className="text-gray-700">{result.Probabilitas}</span>
                </p>
              </div>
              <div className="mt-6 bg-yellow-50 p-6 rounded-lg border border-yellow-200 hover:bg-yellow-100 transition-colors">
                <p className="flex items-start">
                  <span className="font-semibold text-yellow-800 w-32">
                    Saran:{" "}
                  </span>
                  <span className="text-gray-700">
                    {result["Saran dari Gemini"]}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      )}{" "}
    </div>
  );
}
