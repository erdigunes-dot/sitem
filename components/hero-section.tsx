"use client"

import { useState } from "react"
import { Search, MapPin, Home, Building2, Landmark, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const propertyTypes = [
  { label: "Satılık", icon: Home },
  { label: "Kiralık", icon: Building2 },
  { label: "Projeler", icon: Landmark },
]

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("Satılık")

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-istanbul.jpg"
          alt="Kadıköy, İstanbul manzarası"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32">
        {/* Headline */}
        <div className="mb-10 max-w-2xl">
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-secondary-foreground md:text-6xl font-mono">
            Hayalinizdeki Ev,{" "}
            <span className="text-primary">Kadıköy{"'"}den</span>
          </h1>
          <p className="text-lg leading-relaxed text-secondary-foreground/80 md:text-xl">
            {"Kadıköy ve çevresindeki en güncel satılık, kiralık emlak ilanlarını keşfedin. Güvenilir, hızlı ve kolay."}
          </p>
        </div>

        {/* Search card */}
        <div className="rounded-xl border border-border/20 bg-background/95 p-2 shadow-2xl backdrop-blur-sm md:p-3">
          {/* Tabs */}
          <div className="mb-3 flex gap-1">
            {propertyTypes.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setActiveTab(label)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                  activeTab === label
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Search form */}
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Konum, mahalle veya ilçe ara..."
                className="h-12 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <select className="h-12 rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary">
              <option>Tüm Tipler</option>
              <option>Daire</option>
              <option>Müstakil Ev</option>
              <option>Villa</option>
              <option>Arsa</option>
              <option>İş Yeri</option>
            </select>
            <select className="h-12 rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary">
              <option>Fiyat Aralığı</option>
              <option>{"0 - 1.000.000 ₺"}</option>
              <option>{"1.000.000 - 3.000.000 ₺"}</option>
              <option>{"3.000.000 - 5.000.000 ₺"}</option>
              <option>{"5.000.000 - 10.000.000 ₺"}</option>
              <option>{"10.000.000 ₺ +"}</option>
            </select>
            <select className="h-12 rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary">
              <option>Oda Sayısı</option>
              <option>{"1+0"}</option>
              <option>{"1+1"}</option>
              <option>{"2+1"}</option>
              <option>{"3+1"}</option>
              <option>{"4+1"}</option>
              <option>{"5+"}</option>
            </select>
            <Button className="h-12 gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90">
              <Search className="h-5 w-5" />
              <span className="font-medium">Ara</span>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap gap-8">
          {[
            { value: "2.450+", label: "Aktif İlan" },
            { value: "1.200+", label: "Mutlu Müşteri" },
            { value: "15+", label: "Yıllık Deneyim" },
            { value: "50+", label: "Uzman Danışman" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl font-bold text-primary font-mono">{stat.value}</span>
              <span className="text-sm text-secondary-foreground/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
