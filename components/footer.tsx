import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  "Emlak": [
    { label: "Satılık Daireler", href: "#" },
    { label: "Kiralık Daireler", href: "#" },
    { label: "Satılık Villalar", href: "#" },
    { label: "Yeni Projeler", href: "#" },
    { label: "Arsa İlanları", href: "#" },
  ],
  "Mahalleler": [
    { label: "Caferağa", href: "#" },
    { label: "Moda", href: "#" },
    { label: "Fenerbahçe", href: "#" },
    { label: "Yeldeğirmeni", href: "#" },
    { label: "Kozyatağı", href: "#" },
  ],
  "Kurumsal": [
    { label: "Hakkımızda", href: "#" },
    { label: "Ekibimiz", href: "#" },
    { label: "Kariyer", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Basında Biz", href: "#" },
  ],
  "Destek": [
    { label: "Sıkça Sorulan Sorular", href: "#" },
    { label: "İletişim", href: "#" },
    { label: "Gizlilik Politikası", href: "#" },
    { label: "Kullanım Koşulları", href: "#" },
    { label: "KVKK", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground" id="iletisim">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-base font-bold text-primary-foreground">K</span>
              </div>
              <span className="text-lg font-bold tracking-tight font-mono">kadıköyden</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-secondary-foreground/70">
              {"Kadıköy'ün en güvenilir emlak platformu. 15 yılı aşkın süredir müşterilerimize hizmet veriyoruz."}
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:info@kadikoyden.com" className="flex items-center gap-2 text-secondary-foreground/70 transition-colors hover:text-primary">
                <Mail className="h-4 w-4" />
                info@kadikoyden.com
              </a>
              <a href="tel:+902161234567" className="flex items-center gap-2 text-secondary-foreground/70 transition-colors hover:text-primary">
                <Phone className="h-4 w-4" />
                +90 (216) 123 45 67
              </a>
              <div className="flex items-start gap-2 text-secondary-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{"Caferağa Mah. Moda Cad. No:12, Kadıköy / İstanbul"}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                {title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-secondary-foreground/50 md:flex-row">
          <p>{"© 2026 kadikoyden.com - Tüm hakları saklıdır."}</p>
          <p className="flex items-center gap-1">
            <Mail className="h-3.5 w-3.5" />
            info@kadikoyden.com
          </p>
        </div>
      </div>
    </footer>
  )
}
