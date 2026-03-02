import { ArrowUpRight } from "lucide-react"

const neighborhoods = [
  { name: "Caferağa", listings: 320, highlight: true },
  { name: "Moda", listings: 285, highlight: false },
  { name: "Osmanağa", listings: 195, highlight: false },
  { name: "Yeldeğirmeni", listings: 145, highlight: true },
  { name: "Rasimpaşa", listings: 120, highlight: false },
  { name: "Fenerbahçe", listings: 210, highlight: false },
  { name: "Acıbadem", listings: 175, highlight: true },
  { name: "Kozyatağı", listings: 290, highlight: false },
]

export function NeighborhoodsSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Popüler Mahalleler
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl font-mono">
            Kadıköy{"'"}ün En Gözde Semtleri
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {neighborhoods.map((n) => (
            <a
              key={n.name}
              href="#"
              className={`group flex items-center justify-between rounded-xl border p-5 transition-all hover:shadow-lg ${
                n.highlight
                  ? "border-primary/30 bg-primary/5 hover:border-primary hover:shadow-primary/10"
                  : "border-border bg-card hover:border-primary/50 hover:shadow-primary/5"
              }`}
            >
              <div>
                <h3 className="text-base font-semibold text-foreground">{n.name}</h3>
                <p className="text-sm text-muted-foreground">{n.listings} ilan</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-primary">
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary-foreground" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
