"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Sparkles, Brain, RefreshCw } from "lucide-react";

export function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const steps = [
    {
      title: "Customize",
      description:
        "Mold your AI's mind with personality traits, knowledge areas, and response styles that suit your needs.",
      icon: Sparkles,
      color: "bg-gradient-to-br from-[#FF5E00] to-[#FF0000]",
    },
    {
      title: "Train",
      description:
        "Teach it through natural conversations. Every interaction helps your AI understand you better.",
      icon: Brain,
      color: "bg-gradient-to-br from-[#FF0000] to-[#FDBB2D]",
    },
    {
      title: "Evolve",
      description:
        "Watch it rebirth smarter after each session, retaining what works and improving what doesn't.",
      icon: RefreshCw,
      color: "bg-gradient-to-br from-[#FDBB2D] to-[#FF5E00]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="how-it-works" className="py-20 relative" ref={sectionRef}>
      {/* Decorative flame element */}
      <div className="absolute left-0 top-0 h-full w-1/6 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-16 w-32 h-80 bg-gradient-to-t from-[#FF5E00]/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="absolute right-0 bottom-0 h-full w-1/6 pointer-events-none overflow-hidden -z-10">
        <div className="absolute bottom-1/4 -right-16 w-32 h-80 bg-gradient-to-b from-[#FDBB2D]/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Flame className="h-12 w-12 text-[#FF5E00] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            The Phoenix Rebirth Cycle
          </h2>
          <p className=" max-w-2xl mx-auto">
            Just as a phoenix is reborn from ashes, your AI evolves through a
            continuous cycle of learning and improvement.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-card border-primary/20 rounded-xl group hover:-translate-y-2 transition-all ease-linear border"
              variants={itemVariants}
            >
              <div className="p-8 h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`${step.color} w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg`}
                >
                  <step.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold  mb-3">
                  {step.title}
                </h3>
                <p className="">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
