//suscripcion de correo

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Únete a la comunidad
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Suscríbete y recibe un 10% de descuento en tu primera compra, 
            además de ofertas exclusivas y novedades.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground text-background border-0 placeholder:text-background/50 focus-visible:ring-2 focus-visible:ring-primary-foreground"
            />
            <Button 
              type="submit" 
              className="bg-background text-foreground hover:bg-background/90 shrink-0"
            >
              Suscribirme
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
