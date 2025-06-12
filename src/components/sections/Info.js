// src/components/sections/Info.js
import {
  TrashIcon,
  ArrowsRightLeftIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";
import InfoCard from "@/components/ui/InfoCard";

// Data untuk kartu, diambil dari desain Anda
const stats = [
  {
    id: 1,
    title: "Menghasilkan Sekitar 175,000 Ton Sampah",
    description:
      "Berdasarkan data KLHK, setiap hari Indonesia memproduksi sekitar 175.000 ton sampah dari seluruh sumber, baik rumah tangga, industri, maupun komersial. Volume ini terus meningkat seiring pertumbuhan populasi dan konsumsi masyarakat.",
    icon: TrashIcon,
  },
  {
    id: 2,
    title: "60-70% Sampah Tidak Dipilah",
    description:
      "Menurut KLHK (2022) dan Bappenas, lebih dari 60% sampah di Indonesia belum dipilah dari sumbernya (rumah tangga, kantor, dll). Akibatnya, sampah organik dan anorganik tercampur, menyulitkan proses daur ulang dan mempercepat penuhnya TPA.",
    icon: ArrowsRightLeftIcon,
  },
  {
    id: 3,
    title: "Sekitar 350 Ribu Ton Masuk ke Laut",
    description:
      "Indonesia menyumbang sekitar 350 ribu ton sampah plastik ke laut setiap tahun, menjadikannya penyumbang sampah plastik laut terbesar kedua di dunia, setelah Tiongkok.",
    icon: GlobeAsiaAustraliaIcon,
  },
];

export default function Info() {
  return (
    <div className="bg-green-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            APAKAH KAMU TAHU?
          </h2>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {stats.map((stat) => (
            <InfoCard key={stat.id} icon={stat.icon} title={stat.title}>
              {stat.description}
            </InfoCard>
          ))}
        </dl>
      </div>
    </div>
  );
}
