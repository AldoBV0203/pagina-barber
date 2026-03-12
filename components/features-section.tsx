//seccion de caracteristicas

import { Truck, Shield, Award, RefreshCw } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Envío Gratis",
    description: "En pedidos superiores a $50. Entrega en 24-48 horas.",
  },
  {
    icon: Shield,
    title: "Pago Seguro",
    description: "Transacciones 100% seguras con encriptación SSL.",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Solo trabajamos con las mejores marcas del mercado.",
  },
  {
    icon: RefreshCw,
    title: "Devolución Fácil",
    description: "30 días para devolver tu producto sin complicaciones.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
