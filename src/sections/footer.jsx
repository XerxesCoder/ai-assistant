"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Twitter, Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQs", href: "#faq" },
        { label: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "Blog", href: "#" },
        { label: "API Reference", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Press Kit", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Accessibility", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t">
      {/* Main footer content */}
      <div className="bg-background pt-16 pb-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo and description */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Flame className="h-6 w-6 text-[#FF5E00]" />
                <span className="font-bold text-xl ">Phoenix AI</span>
              </Link>
              <p className=" mb-6">
                Create, train and personalize your own AI assistant that evolves
                with every interaction. The AI that learns and rebirths, just
                like a phoenix.
              </p>
              <div className="flex space-x-4">
                <SocialLink icon={Twitter} href="#" />
                <SocialLink icon={Github} href="#" />
                <SocialLink icon={Linkedin} href="#" />
                <SocialLink icon={Instagram} href="#" />
              </div>
            </div>

            {/* Footer navigation */}
            {footerLinks.map((section, i) => (
              <div key={i} className="col-span-1">
                <h3 className="font-semibold  mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className=" hover:text-[#FDBB2D] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr className="border-[#FF5E00]/20 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="/50 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Phoenix AI. Phoenix AI burns cookies
              to rebirth your experience.
            </p>
            <div className="flex space-x-4">
              <button className=" text-sm transition-colors">
                Privacy Policy
              </button>
              <button className=" text-sm transition-colors">
                Terms of Service
              </button>
              <button className=" text-sm transition-colors">Cookies</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon, href }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2E0F00] hover:bg-[#FF5E00] transition-colors "
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}
