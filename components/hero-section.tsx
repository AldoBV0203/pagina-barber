//la seccion mas grande con imagen de fondo

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-barbershop.jpg"
          alt="Barbería premium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <p className="text-primary font-medium tracking-widest text-sm mb-4">
            PRODUCTOS PROFESIONALES
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight text-balance">
            El arte del
            <span className="text-primary block">grooming</span>
            masculino
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg">
            Descubre nuestra selección premium de productos de barbería. 
            Ceras, pomadas, geles y herramientas profesionales para el 
            caballero moderno.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            >
              Ver Productos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-foreground/20 text-foreground hover:bg-foreground/5 px-8"
            >
              Nuestra Historia
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
