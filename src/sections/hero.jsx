"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="pt-32 pb-20 overflow-hidden relative mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center jus">
          <div className="w-full space-y-8 flex flex-col justify-center items-center">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Discover Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                Cosmic Companion
              </span>
            </motion.h1>

            <motion.p
              className="text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              An AI entity from beyond, designed to evolve with you through the
              cosmos of knowledge and imagination.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4"
            >
              <Button size="lg" variant="default">
                Begin Journey
              </Button>
              <Button size="lg" variant="outline">
                Explore Dimensions
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
