"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { MobileMenu } from "./mobile-menu"
import { Logo } from "./logo"
import { ContactDialog } from "./contact-dialog"

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isVisible ? "top-8 opacity-100" : "-top-24 opacity-0"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="bg-black/50 backdrop-blur-[120px] rounded-full px-8 py-3 flex items-center gap-8 shadow-lg border border-white/10 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center justify-end gap-4 flex-1 pr-4">
          <Link
            href="#seo"
            className="px-4 py-2 text-zinc-300 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            SEO
          </Link>
          <Link
            href="#portfolio"
            className="px-4 py-2 text-zinc-300 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Примеры
          </Link>
          <Link
            href="#pricing"
            className="px-4 py-2 text-zinc-300 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Цены
          </Link>
          <ContactDialog>
            <button
              className="px-[18px] py-[10px] rounded-full border border-[#5100fd] bg-[#5100fd]/50 text-white font-medium hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
              Связаться
            </button>
          </ContactDialog>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center justify-end flex-1 pr-4">
          <MobileMenu />
        </div>
      </div>
      </div>
    </nav>
  )
}
