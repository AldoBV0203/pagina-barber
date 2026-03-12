"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Heart } from "lucide-react"

type Producto = {
  id: number
  nombre: string
  descripcion: string
  precio: number
  imagen: string
  categoria: string
  stock: number
}

const filters = ["Todos", "Pomadas", "Ceras", "Geles", "Pastas", "Máquinas"]

export function ProductsSection() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [cargando, setCargando] = useState(true)
  const [activeFilter, setActiveFilter] = useState("Todos")
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    fetch("/api/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data)
        setCargando(false)
      })
  }, [])

  const filteredProducts = activeFilter === "Todos"
    ? productos
    : productos.filter(p => p.categoria.toLowerCase() === activeFilter.toLowerCase().replace("á", "a").replace("í", "i"))

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(f => f !== id)
        : [...prev, id]
    )
  }

  return (
    <section id="productos" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-primary font-medium tracking-widest text-sm mb-4">
              COLECCIÓN
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Productos Destacados
            </h2>
          </div>
          <p className="text-muted-foreground mt-4 md:mt-0 max-w-md">
            Selección premium de los mejores productos para el cuidado y estilizado del cabello masculino.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cargando ? (
            <p className="text-muted-foreground col-span-3 text-center">Cargando productos...</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.imagen}
                    alt={product.nombre}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(product.id)
                          ? "fill-primary text-primary"
                          : "text-foreground"
                      }`}
                    />
                  </button>
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground tracking-wide mb-1">
                    BLADE & CROWN
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {product.nombre}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-primary">
                      ${product.precio.toFixed(2)}
                    </span>
                  </div>
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Añadir al carrito
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Ver todos */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-foreground/20 text-foreground hover:bg-foreground/5"
          >
            Ver todos los productos
          </Button>
        </div>
      </div>
    </section>
  )
}