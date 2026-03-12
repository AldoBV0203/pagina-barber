//opiniones de clientes

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Barbero Profesional",
    content: "La mejor selección de productos que he encontrado. La calidad de las pomadas es excepcional y mis clientes lo notan.",
    rating: 5,
  },
  {
    name: "Miguel Ángel",
    role: "Cliente Frecuente",
    content: "Llevo más de un año comprando aquí. El servicio es impecable y los productos llegan siempre en perfecto estado.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Dueño de Barbería",
    content: "Los precios competitivos y la variedad de máquinas profesionales hacen de esta tienda mi proveedor principal.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-4">
            TESTIMONIOS
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>
              <div>
                <p className="font-serif font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
