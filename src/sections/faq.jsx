"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Flame } from "lucide-react";

export function FAQ() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: "Can my AI assistant 'die'?",
      answer:
        "No—it only rebirths stronger. Your Phoenix AI uses previous conversations as fuel for new learning, continuously evolving without losing what makes it uniquely yours. Think of it as a phoenix that rises from its own knowledge, getting smarter with each cycle.",
    },
    {
      question: "What's the difference between free and paid?",
      answer:
        "Free users get a baby phoenix with basic capabilities—50 messages per day and 24-hour memory. Paid users unlock the full firestorm: unlimited messages, extended memory, voice customization, and priority API access. The Pro tier is like upgrading from a match to a flamethrower.",
    },
    {
      question: "Can I customize my AI's personality?",
      answer:
        "Absolutely! You can adjust various personality traits like creativity, logic, empathy, and humor using intuitive sliders. You can also provide examples of how you'd like your AI to respond in different situations, creating a truly personalized experience that matches your preferences.",
    },
    {
      question: "How does the AI learning process work?",
      answer:
        "Your Phoenix AI learns through a process we call 'flame imprinting.' Every conversation becomes training data that helps shape your AI's understanding of your preferences, knowledge needs, and communication style. The more you interact, the more personalized your experience becomes—like a flame that takes the shape of its container.",
    },
    {
      question: "Is my conversation data private?",
      answer:
        "Absolutely. Your conversations are encrypted and used only to improve your personal AI. We follow strict data protection practices, and with paid plans, you can even opt for local-only processing where your data never leaves your device. Your phoenix's flame is yours alone.",
    },
    {
      question: "Can I use Phoenix AI for my business?",
      answer:
        "Yes! Our Inferno tier is designed specifically for business needs with features like white-labeling, API access, team management, and custom training on your business data. Many companies use Phoenix AI for customer service, internal knowledge management, and automated workflows.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="faq" className="py-20 " ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Burning Questions
          </h2>
          <p className=" max-w-2xl mx-auto">
            Get answers to the most common questions about Phoenix AI and how it
            can transform your digital experience.
          </p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-primary/20 rounded-lg overflow-hidden  backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:text-[#FDBB2D] transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <Flame className="w-5 h-5 mr-3 text-[#FF5E00]" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="pl-8">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
