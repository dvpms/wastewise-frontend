// src/components/sections/Info.js
"use client";

import {
  TrashIcon,
  ArrowsRightLeftIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";

// Data untuk kartu, diambil dari desain Anda
const stats = [
  {
    id: 1,
    title: "Menghasilkan Sekitar 175,000 Ton Sampah",
    description:
      "Berdasarkan data KLHK, setiap hari Indonesia memproduksi sekitar 175.000 ton sampah dari seluruh sumber, baik rumah tangga, industri, maupun komersial. Volume ini terus meningkat seiring pertumbuhan populasi dan konsumsi masyarakat.",
    icon: TrashIcon,
    color: "text-red-600",
    bgColor: "bg-red-50",
    iconBg: "bg-red-100",
  },
  {
    id: 2,
    title: "60-70% Sampah Tidak Dipilah",
    description:
      "Menurut KLHK (2022) dan Bappenas, lebih dari 60% sampah di Indonesia belum dipilah dari sumbernya (rumah tangga, kantor, dll). Akibatnya, sampah organik dan anorganik tercampur, menyulitkan proses daur ulang dan mempercepat penuhnya TPA.",
    icon: ArrowsRightLeftIcon,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
  },
  {
    id: 3,
    title: "Sekitar 350 Ribu Ton Masuk ke Laut",
    description:
      "Indonesia menyumbang sekitar 350 ribu ton sampah plastik ke laut setiap tahun, menjadikannya penyumbang sampah plastik laut terbesar kedua di dunia, setelah Tiongkok.",
    icon: GlobeAsiaAustraliaIcon,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
  },
];

export default function Info() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-green-700">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-sm font-medium text-white">📊 Fakta Mengejutkan</span>
          </motion.div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
            APAKAH KAMU{" "}
            <span className="text-yellow-300">
              TAHU?
            </span>
          </h2>
          
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Berikut adalah fakta-fakta mengejutkan tentang kondisi sampah di Indonesia yang perlu kita ketahui bersama.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3 max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
              >
                <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`rounded-xl p-3 ${stat.iconBg} ring-1 ring-gray-200`}>
                        <IconComponent className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {stat.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {stat.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <motion.div
                          className={`h-1 rounded-full bg-gradient-to-r ${stat.color.replace('text-', 'from-')} ${stat.color.replace('text-', 'to-')}-700`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(index + 1) * 30}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-lg text-white/90 mb-4">
            Bersama-sama kita bisa membuat perubahan yang berarti
          </p>
        </motion.div>
      </div>
    </section>
  );
}
