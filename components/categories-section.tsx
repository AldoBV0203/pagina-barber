//seccion de categorias

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    name: "Pomadas",
    description: "Fijación fuerte con brillo clásico",
    image: "/images/product-pomade.jpg",
    count: 12,
  },
  {
    name: "Ceras",
    description: "Control flexible y textura natural",
    image: "/images/product-wax.jpg",
    count: 8,
  },
  {
    name: "Geles",
    description: "Fijación extrema para todo el día",
    image: "/images/product-gel.jpg",
    count: 15,
  },
  {
    name: "Máquinas",
    description: "Herramientas profesionales de corte",
    image: "/images/product-clipper.jpg",
    count: 6,
  },
]

export function CategoriesSection() {
  return (
    <section id="categorias" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-4">
            EXPLORA
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Categorías
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href="#"
              className="group relative overflow-hidden rounded-lg bg-card aspect-[3/4] block"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {category.count} productos
                    </p>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
