// src/components/sections/Upload.js
import Link from "next/link";
import { PhotoIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Upload() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Wrapper utama dengan layout vertikal dan di tengah */}
        <div className="mx-auto max-w-2xl text-center">
          {/* 1. Judul Utama */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Masuk kategori mana sampahmu?
          </h2>
          <h3 className="mt-2 text-lg leading-8 text-gray-600">
            organik atau nonorganik?
          </h3>

          {/* 2. Placeholder untuk Gambar */}
          <div className="mt-10 flex justify-center flex-col space-y-5 md:flex-row md:space-x-5">
            <div className="w-full max-w-lg h-80 rounded-xl bg-gray-200 flex items-center justify-center border border-gray-300">
              <Image
                src="/images/organik.jpg"
                alt="organik"
                width={300}
                height={300}
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className="w-full max-w-lg h-80 rounded-xl bg-gray-200 flex items-center justify-center border border-gray-300">
              <Image
                src="/images/anorganik.png"
                alt="nonorganik"
                width={300}
                height={300}
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>

          {/* 3. Sub-judul */}
          <h2 className="mt-10 text-3xl font-semibold text-green-600">
            Kenali Jenis Sampahmu!
          </h2>

          <p className="mt-2 text-lg leading-8 text-gray-600">
            Dengan satu foto, aplikasi kami akan membantu Anda mengidentifikasi
            jenis sampah dan memberikan rekomendasi pengelolaan yang tepat.
          </p>

          <div className="mt-10">
            <Link
              href="/upload"
              className="rounded-md bg-green-700 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              Mulai Klasifikasi Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
