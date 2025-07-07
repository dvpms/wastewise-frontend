// src/components/sections/Hero.js
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDownIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      {/* Enhanced Background with gradient overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/hero-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/60 to-emerald-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative px-6 pt-14 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <SparklesIcon className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium text-white">
                Small Steps, Big Impact
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6"
            >
              Start Managing{" "}
              <span className="text-green-300">
                Waste Today
              </span>{" "}
              with WasteWise
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-8 text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Learn about different types of waste, explore effective waste
              management practices, and take action toward a cleaner, more
              sustainable world. Your choices make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link href="/upload">
                <Button size="lg" className="min-w-[200px] group">
                  <CloudArrowUpIcon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Start Uploading
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary" size="lg" className="min-w-[200px]">
                  Learn More
                </Button>
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="flex flex-col items-center text-white/70"
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDownIcon className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
