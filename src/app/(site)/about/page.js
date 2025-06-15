// src/app/(main)/about/page.js
import {
  TrashIcon,
  ClipboardDocumentListIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const features = [
  {
    name: "Identifikasi Sampah",
    description:
      "Ketahui 12 jenis sampah seperti organik, plastik, kertas, logam, dan lainnya dengan mudah.",
    icon: TrashIcon,
    isFeatured: true,
  },
  {
    name: "Saran Pengelolaan",
    description:
      "Dapatkan rekomendasi untuk komposting, daur ulang, atau pengumpulan ke bank sampah.",
    icon: ClipboardDocumentListIcon,
    isFeatured: true,
  },
  {
    name: "Edukasi Lingkungan",
    description:
      "Pelajari dampak sampah dan cara mengurangi jejak lingkungan Anda.",
    icon: BookOpenIcon,
    isFeatured: true,
  },
];

const team = [
  {
    name: "Absana Mutiara Nabila",
    role: "Machine Learning",
    university: "Universitas Jenderal Soedirman",
    imageUrl: "/images/team/absana-mutiara.jpg",
  },
  {
    name: "Dwi Sandi Kalla",
    role: "Machine Learning",
    university: "Universitas Jenderal Soedirman",
    imageUrl: "/images/team/dwi-sandi.jpg",
  },
  {
    name: "Meicha Salsabila Budiyanti",
    role: "Machine Learning",
    university: "Universitas Jenderal Soedirman",
    imageUrl: "/images/team/meicha-salsabila.jpg",
  },
  {
    name: "Devran Perdana Malik",
    role: "Front-End & Back-End",
    university: "Universitas Pramita Indonesia",
    imageUrl: "/images/team/devran-perdana.jpeg",
  },
  {
    name: "Fadiyah Adilah Yusuf",
    role: "Front-End",
    university: "Universitas Negeri Makassar",
    imageUrl: "/images/team/fadiyah-adilah.jpg",
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* Bagian Judul dan Deskripsi (tetap sama) */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Apa itu Waste Wise?
            </h1>
          </div>
          <div className="mt-16 mx-auto max-w-7xl lg:flex lg:items-start lg:gap-x-8">
            <div className="lg:flex-auto">
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Waste Wise adalah platform edukatif dan interaktif yang
                dirancang untuk membantu kamu lebih bijak dalam mengelola
                sampah. Kami percaya bahwa perubahan besar bisa dimulai dari
                tindakan kecil—seperti tahu bedanya sampah organik dan
                anorganik.
              </p>
              <p className="mt-8 text-lg leading-8 text-gray-600">
                Kami berharap dapat membantu masyarakat mengenai, memilah, dan
                mengelola sampah dengan bijak melalui teknologi yang mudah
                digunakan. Visi kami yaitu menjadikan Waste Wise sebagai
                platform edukasi dan teknologi terdepan dalam membantu
                masyarakat mengenali dan mengelola sampah secara cerdas dan
                berkelanjutan.
              </p>
            </div>
            <div className="mt-12 flex justify-center lg:mt-0 lg:flex-shrink-0">
              <Image
                src="/about.png"
                alt="waste wise"
                width={500}
                height={500}
                className="w-96 h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Kartu Fitur (tetap sama) */}
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className={`flex flex-col p-8 rounded-2xl shadow-lg
                ${
                  feature.isFeatured
                    ? "bg-green-800 text-white transform scale-105"
                    : "bg-gray-50"
                }`}
            >
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <feature.icon
                  className={`h-8 w-8 flex-none ${
                    feature.isFeatured ? "text-white" : "text-green-600"
                  }`}
                  aria-hidden="true"
                />
                {feature.name}
              </dt>
              <dd
                className={`mt-4 flex flex-auto flex-col text-base leading-7 ${
                  feature.isFeatured ? "text-green-100" : "text-gray-600"
                }`}
              >
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ============== BAGIAN BARU: TIM KAMI ============== */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tim Kami
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Di balik WasteWise, ada tim yang berdedikasi dan bersemangat untuk
              menciptakan perubahan.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {team.map((person) => (
              <li
                key={person.name}
                className="text-center bg-white p-6 rounded-lg shadow-md"
              >
                <Image
                  className="mx-auto h-24 w-24 rounded-full object-cover"
                  width={100}
                  height={100}
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-green-600">
                  {person.role}
                </p>
                <p className="text-xs mt-1 leading-6 text-gray-500">
                  {person.university}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
