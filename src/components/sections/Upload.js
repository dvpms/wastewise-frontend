// src/components/sections/Upload.js
"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Upload() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    // Hanya ambil file pertama dan buat URL pratinjau
    if (acceptedFiles?.length) {
      setResult(null); // Reset hasil sebelumnya
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg", ".gif"],
    },
    maxFiles: 1,
  });

  const removeFile = () => {
    setFiles([]);
    setResult(null);
  };

  // Ganti fungsi handleClassify Anda dengan yang ini

  const handleClassify = async () => {
    if (!files.length) return;

    setLoading(true);
    setResult(null);

    const formData = new FormData();
    // PERUBAHAN: Mengganti nama field dari 'image' menjadi 'file'
    formData.append("file", files[0]);

    const mlApiUrl = "http://18.136.194.249:8080/klasifikasi-sampah";

    try {
      console.log('Mengirim gambar ke API ML dengan field "file"...');
      const response = await fetch(mlApiUrl, {
        method: "POST",
        body: formData,
        // Kita tidak perlu mengatur Content-Type header secara manual,
        // browser akan melakukannya secara otomatis untuk multipart/form-data
      });

      if (!response.ok) {
        // Coba baca error dari server jika ada
        const errorData = await response.json().catch(() => null);
        console.error("Error response from server:", errorData);
        throw new Error(
          `Gagal mendapatkan hasil dari model ML. Status: ${response.status}`
        );
      }

      const mlResult = await response.json();
      console.log("Hasil dari ML:", mlResult);
      setResult(mlResult);

      // TODO: Kirim hasil ML ke backend kita untuk dapat poin
    } catch (error) {
      console.error("Terjadi kesalahan saat klasifikasi:", error);
      setResult({
        Error:
          "Gagal melakukan klasifikasi. Silakan periksa konsol untuk detail.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kenali Jenis Sampahmu!
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Buat lingkungan lebih bersih dengan satu sentuhan.
          </p>
        </div>
        <div className="mt-16 mx-auto max-w-xl">
          {/* Tampilkan pratinjau gambar jika ada */}
          {files.length > 0 ? (
            <div className="text-center">
              <div className="relative inline-block">
                <Image
                  src={files[0].preview}
                  alt={files[0].name}
                  width={200}
                  height={200}
                  className="w-64 h-64 object-cover rounded-md mx-auto"
                  onLoad={() => URL.revokeObjectURL(files[0].preview)}
                />
                <button
                  type="button"
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                  onClick={removeFile}
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
              <button
                onClick={handleClassify}
                disabled={loading}
                className="mt-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:bg-gray-400"
              >
                {loading ? "Menganalisis..." : "Klasifikasi Sekarang"}
              </button>
            </div>
          ) : (
            // Tampilkan area dropzone jika tidak ada gambar
            <div
              {...getRootProps({
                className:
                  "flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 transition-colors " +
                  (isDragActive ? "bg-blue-50 border-blue-600" : "bg-white"),
              })}
            >
              <input {...getInputProps()} />
              <div className="text-center">
                <ArrowUpTrayIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <p className="pl-1">
                    {isDragActive
                      ? "Jatuhkan file di sini..."
                      : "Tarik dan jatuhkan file, atau klik untuk memilih"}
                  </p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          )}

          {/* Tampilkan hasil klasifikasi */}
          {result && (
            <div className="mt-8 p-4 border rounded-md bg-gray-50 text-left">
              <h3 className="font-bold text-lg">Hasil Klasifikasi:</h3>
              {result.Error ? (
                <p className="text-red-600">{result.Error}</p>
              ) : (
                <ul className="list-disc list-inside mt-2">
                  <li>
                    <strong>Kategori:</strong> {result.Kategori}
                  </li>
                  <li>
                    <strong>Jenis:</strong> {result.Jenis}
                  </li>
                  <li>
                    <strong>Probabilitas:</strong> {result.Probabilitas}
                  </li>
                  <li className="mt-2">
                    <strong>Saran:</strong> {result["Saran dari Gemini"]}
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
