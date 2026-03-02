import { Building2, Home, Landmark, MapPin, Store, TreePine } from "lucide-react"

const categories = [
  { name: "Daire", count: "1.250", icon: Building2 },
  { name: "Müstakil Ev", count: "340", icon: Home },
  { name: "Villa", count: "128", icon: TreePine },
  { name: "Arsa", count: "95", icon: MapPin },
  { name: "İş Yeri", count: "210", icon: Store },
  { name: "Proje", count: "45", icon: Landmark },
]

export function CategoriesSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
              Kategoriler
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl font-mono">
              Ne Arıyorsunuz?
            </h2>
          </div>
          <a href="#" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
            {"Tümünü Gör →"}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.name}
                href="#"
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-primary">
                  <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{cat.name}</p>
                  <p className="text-xs text-muted-foreground">{cat.count} ilan</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
