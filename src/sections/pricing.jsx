"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pricing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      name: "Ember",
      subtitle: "Free Tier",
      price: "$0",
      period: "forever",
      features: [
        "Basic AI personality",
        "50 messages/day",
        "24-hour memory",
        "Text interactions only",
        "Standard response time",
      ],
      cta: "Start Free",
    },
    {
      name: "Blaze",
      subtitle: "Pro Tier",
      price: "$29.99",
      period: "forever",
      popular: true,
      features: [
        "Advanced AI personality",
        "Unlimited messages",
        "7-day memory",
        "Voice customization",
        "Priority response time",
        "Custom commands",
      ],
      cta: "Go Pro",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="pricing" className="py-20 " ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Flame Intensity
          </h2>
          <p className=" max-w-2xl mx-auto">
            Select a plan that matches your needs, from a basic ember to a
            roaring inferno of capabilities.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={cn(
                "border border-primary/30 bg-card rounded-xl overflow-hidden transition-all duration-500 transform",
                hoveredCard === index ? "scale-105 z-10" : "scale-100 z-0"
              )}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <div className="text-sm uppercase tracking-wider opacity-80">
                    {plan.subtitle}
                  </div>
                  <h3 className={cn("text-2xl font-bold mb-2")}>{plan.name}</h3>
                  <div className="flex items-end">
                    <span className={cn("text-3xl font-bold")}>
                      {plan.price}
                    </span>
                    <span className={cn("ml-1 opacity-80")}>{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check
                        className={cn("h-5 w-5 mr-2 flex-shrink-0 mt-0.5")}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn("w-full mt-auto transition-all")}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
