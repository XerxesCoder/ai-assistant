"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Flame, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/toggle-theme";
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-backgorund border-b backdrop-blur-sm py-3 shadow-lg"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <Flame className="h-8 w-8 text-[#FF5E00]" />
          </div>
          <span className="font-bold text-2xl ">Phoenix AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
          <div className="flex items-center gap-4">
            <ModeToggle />
            <SignedOut>
              <SignInButton>
                <Button className="bg-gradient-to-r from-[#FF5E00] to-[#FF0000] hover:from-[#FF0000] hover:to-[#FF5E00]  group relative overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute inset-0 bg-[#FDBB2D]/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1A0A00]/95 backdrop-blur-md p-4 shadow-lg">
          <nav className="flex flex-col gap-4 py-4">
            <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
            <div className="flex flex-col gap-2 mt-4">
              <ModeToggle />
              <SignedOut>
                <SignInButton>
                  <Button className="bg-gradient-to-r from-[#FF5E00] to-[#FF0000] hover:from-[#FF0000] hover:to-[#FF5E00]  group relative overflow-hidden">
                    <span className="relative z-10">Get Started</span>
                    <span className="absolute inset-0 bg-[#FDBB2D]/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <Link href="#pricing" className=" hover:text-[#FDBB2D] transition-colors">
        Pricing
      </Link>
      <Link href="#faq" className=" hover:text-[#FDBB2D] transition-colors">
        FAQ
      </Link>
      <Link href="#" className=" hover:text-[#FDBB2D] transition-colors">
        Launch App
      </Link>
    </>
  );
}

function MobileNavLinks({ closeMenu }) {
  return (
    <>
      <Link
        href="#pricing"
        className=" hover:text-[#FDBB2D] transition-colors py-2 border-b border-[#2E0F00]"
        onClick={closeMenu}
      >
        Pricing
      </Link>
      <Link
        href="#faq"
        className=" hover:text-[#FDBB2D] transition-colors py-2 border-b border-[#2E0F00]"
        onClick={closeMenu}
      >
        FAQ
      </Link>
      <Link
        href="#"
        className=" hover:text-[#FDBB2D] transition-colors py-2 border-b border-[#2E0F00]"
        onClick={closeMenu}
      >
        Launch App
      </Link>
    </>
  );
}
