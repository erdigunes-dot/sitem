import { ShieldCheck, TrendingUp, Users, FileText, Headphones, Calculator } from "lucide-react"

const services = [
  {
    icon: ShieldCheck,
    title: "Güvenli Alışveriş",
    description: "Tüm ilanlarımız doğrulanmış ve güvenilir kaynaklardan sağlanmaktadır.",
  },
  {
    icon: TrendingUp,
    title: "Piyasa Analizi",
    description: "Kadıköy ve çevresindeki güncel emlak piyasası verileriyle doğru yatırım kararları.",
  },
  {
    icon: Users,
    title: "Uzman Danışmanlar",
    description: "Deneyimli emlak danışmanlarımız size en uygun seçenekleri sunar.",
  },
  {
    icon: FileText,
    title: "Hukuki Destek",
    description: "Tapu işlemleri ve sözleşme süreçlerinde profesyonel hukuki danışmanlık.",
  },
  {
    icon: Calculator,
    title: "Kredi Hesaplama",
    description: "Banka kredisi hesaplama araçlarıyla bütçenize uygun planlar oluşturun.",
  },
  {
    icon: Headphones,
    title: "7/24 Destek",
    description: "Her an yanınızdayız. Sorularınız için bize ulaşabilirsiniz.",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-secondary py-16 text-secondary-foreground md:py-20" id="hakkimizda">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Hizmetlerimiz
          </span>
          <h2 className="mx-auto max-w-lg text-balance text-2xl font-bold tracking-tight md:text-3xl font-mono">
            Neden Kadıköyden?
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 transition-all hover:border-primary/30 hover:bg-secondary-foreground/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-base font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-secondary-foreground/70">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
