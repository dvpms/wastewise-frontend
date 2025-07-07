// src/components/sections/Upload.js
"use client";

import Link from "next/link";
import { PhotoIcon, CameraIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function Upload() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gray-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-8"
          >
            <SparklesIcon className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-700">
              AI-Powered Classification
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4"
          >
            Masuk kategori mana{" "}
            <span className="text-green-600">
              sampahmu?
            </span>
          </motion.h2>

          <motion.h3
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12"
          >
            organik atau nonorganik?
          </motion.h3>

          {/* Image comparison section */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0 relative">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/organik.jpg"
                      alt="Sampah Organik"
                      width={400}
                      height={256}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-lg font-bold text-white mb-1">Sampah Organik</h4>
                      <p className="text-green-100 text-sm">
                        Dapat terurai secara alami oleh mikroorganisme
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0 relative">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/anorganik.png"
                      alt="Sampah Anorganik"
                      width={400}
                      height={256}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-lg font-bold text-white mb-1">Sampah Anorganik</h4>
                      <p className="text-blue-100 text-sm">
                        Memerlukan waktu lama untuk terurai, dapat didaur ulang
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Call to action section */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="text-green-600">Kenali</span> Jenis Sampahmu!
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dengan satu foto, aplikasi kami akan membantu Anda mengidentifikasi
              jenis sampah dan memberikan rekomendasi pengelolaan yang tepat menggunakan
              teknologi AI terdepan.
            </p>

            {/* Features */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              variants={containerVariants}
            >
              {[
                {
                  icon: CameraIcon,
                  title: "Ambil Foto",
                  description: "Upload gambar sampah Anda"
                },
                {
                  icon: SparklesIcon,
                  title: "AI Analysis",
                  description: "Sistem AI menganalisis jenis sampah"
                },
                {
                  icon: PhotoIcon,
                  title: "Dapatkan Hasil",
                  description: "Terima klasifikasi dan rekomendasi"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
            >
              <Link href="/upload">
                <Button size="lg" className="group">
                  <CameraIcon className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                  Mulai Klasifikasi Sekarang
                </Button>
              </Link>
            </motion.div>

            {/* Additional info */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-500 mt-6"
            >
              ⚡ Proses klasifikasi hanya membutuhkan beberapa detik
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
