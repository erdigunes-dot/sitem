import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-2xl bg-primary">
          <div className="flex flex-col items-center gap-8 p-8 text-center md:p-16">
            <h2 className="max-w-xl text-balance text-2xl font-bold tracking-tight text-primary-foreground md:text-4xl font-mono">
              Emlak Danışmanlarımızla Hemen İletişime Geçin
            </h2>
            <p className="max-w-md text-pretty text-primary-foreground/80">
              {"Satılık veya kiralık mülk arıyorsanız, uzman ekibimiz size yardımcı olmak için hazır."}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <Phone className="h-4 w-4" />
                Bizi Arayın
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Ücretsiz Değerlendirme
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
