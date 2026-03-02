import { PropertyCard } from "@/components/property-card"

const featuredProperties = [
  {
    image: "/images/property-1.jpg",
    title: "Deniz Manzaralı Lüks Daire",
    location: "Kadıköy, Caferağa",
    price: "4.250.000 ₺",
    rooms: "3+1",
    area: "145 m²",
    baths: "2",
    badge: "Öne Çıkan",
    badgeVariant: "default" as const,
  },
  {
    image: "/images/property-2.jpg",
    title: "Boğaz Manzaralı Penthouse",
    location: "Kadıköy, Moda",
    price: "8.750.000 ₺",
    rooms: "4+1",
    area: "220 m²",
    baths: "3",
    badge: "Yeni",
    badgeVariant: "default" as const,
  },
  {
    image: "/images/property-3.jpg",
    title: "Tarihi Binada Renoveli Daire",
    location: "Kadıköy, Yeldeğirmeni",
    price: "2.950.000 ₺",
    rooms: "2+1",
    area: "110 m²",
    baths: "1",
    badge: "Fırsat",
    badgeVariant: "secondary" as const,
  },
  {
    image: "/images/property-4.jpg",
    title: "Havuzlu Site İçi Rezidans",
    location: "Ataşehir, Ataşehir Merkez",
    price: "6.100.000 ₺",
    rooms: "3+1",
    area: "180 m²",
    baths: "2",
  },
  {
    image: "/images/property-5.jpg",
    title: "Şehir Manzaralı Stüdyo",
    location: "Kadıköy, Osmanağa",
    price: "1.850.000 ₺",
    rooms: "1+1",
    area: "55 m²",
    baths: "1",
    badge: "Yeni",
    badgeVariant: "default" as const,
  },
  {
    image: "/images/property-6.jpg",
    title: "Deniz Manzaralı Müstakil Villa",
    location: "Tuzla, Sahil",
    price: "12.500.000 ₺",
    rooms: "5+2",
    area: "350 m²",
    baths: "4",
    badge: "Premium",
    badgeVariant: "default" as const,
  },
]

export function FeaturedSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-20" id="satilik">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
              Öne Çıkan İlanlar
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl font-mono">
              En Yeni Fırsatlar
            </h2>
          </div>
          <a href="#" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
            {"Tüm İlanlar →"}
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.title} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}
