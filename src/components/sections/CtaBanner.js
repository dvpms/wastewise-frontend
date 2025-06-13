// src/components/sections/CtaBanner.js
export default function CtaBanner() {
  return (
    <div className="bg-green-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Perlu Tindakan Segera
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-green-200">
            Dengan pertumbuhan populasi dan konsumsi yang terus meningkat,
            Indonesia perlu segera mengatasi masalah sampah. Memilah sampah
            organik dan anorganik adalah langkah awal yang penting untuk
            mengurangi dampak lingkungan.
          </p>
        </div>
      </div>
    </div>
  );
}
