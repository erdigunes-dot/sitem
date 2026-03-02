"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Ana Sayfa", href: "#" },
  { label: "Satılık", href: "#satilik" },
  { label: "Kiralık", href: "#kiralik" },
  { label: "Projeler", href: "#projeler" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "İletişim", href: "#iletisim" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+902161234567" className="flex items-center gap-1.5 transition-colors hover:text-primary">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">+90 (216) 123 45 67</span>
            </a>
            <a href="mailto:info@kadikoyden.com" className="flex items-center gap-1.5 transition-colors hover:text-primary">
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">info@kadikoyden.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" className="transition-colors hover:text-primary">Giriş Yap</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="#" className="transition-colors hover:text-primary">Kayıt Ol</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">K</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground font-mono">
              kadikoyden.com
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Button className="hidden bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex">
              Ücretsiz İlan Ver
            </Button>
            <button
              className="rounded-md p-2 text-foreground lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü aç/kapat"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-3 bg-primary text-primary-foreground hover:bg-primary/90">
                Ücretsiz İlan Ver
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
