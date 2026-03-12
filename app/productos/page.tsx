"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Plus, Minus, MessageCircle } from "lucide-react"

type Producto = {
  id: number
  nombre: string
  descripcion: string
  precio: number
  imagen: string
  categoria: string
  stock: number
}

type ItemCarrito = {
  producto: Producto
  cantidad: number
}

const WHATSAPP_NUMBER = "525561880320" // 👈 Pon aquí tu número

export default function PaginaProductos() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [cargando, setCargando] = useState(true)
  const [carrito, setCarrito] = useState<ItemCarrito[]>([])
  const [filtro, setFiltro] = useState("Todos")

  useEffect(() => {
    fetch("/api/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data)
        setCargando(false)
      })
  }, [])

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.producto.id === producto.id)
      if (existe) {
        return prev.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }
      return [...prev, { producto, cantidad: 1 }]
    })
  }

  const cambiarCantidad = (id: number, delta: number) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.producto.id === id
            ? { ...item, cantidad: item.cantidad + delta }
            : item
        )
        .filter((item) => item.cantidad > 0)
    )
  }

  const total = carrito.reduce(
    (acc, item) => acc + item.producto.precio * item.cantidad,
    0
  )

  const pedirPorWhatsapp = () => {
    if (carrito.length === 0) return

    const lineas = carrito.map(
      (item) =>
        `• ${item.producto.nombre} x${item.cantidad} — $${(item.producto.precio * item.cantidad).toFixed(2)}`
    )

    const mensaje = 
      `¡Hola! Quiero hacer el siguiente pedido:\n\n` +
      lineas.join("\n") +
      `\n\n*Total: $${total.toFixed(2)}*`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
    window.open(url, "_blank")
  }

  const categorias = ["Todos", ...Array.from(new Set(productos.map((p) => p.categoria)))]

  const productosFiltrados = filtro === "Todos"
    ? productos
    : productos.filter((p) => p.categoria === filtro)

  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <div className="border-b border-border px-6 py-6">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl font-bold text-foreground">
              BLADE<span className="text-primary">&</span>CROWN
            </h1>
            <p className="text-muted-foreground text-sm mt-1">Catálogo de productos</p>
          </div>

          {/* Resumen carrito */}
          {carrito.length > 0 && (
            <div className="flex items-center gap-4 bg-secondary/50 rounded-lg px-4 py-3 border border-border">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <div className="text-sm">
                <p className="font-medium text-foreground">
                  {carrito.reduce((a, i) => a + i.cantidad, 0)} productos
                </p>
                <p className="text-primary font-bold">${total.toFixed(2)}</p>
              </div>
              <Button
                onClick={pedirPorWhatsapp}
                className="bg-green-600 hover:bg-green-700 text-white ml-2"
                size="sm"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Pedir por WhatsApp
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categorias.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={filtro === cat ? "default" : "outline"}
              onClick={() => setFiltro(cat)}
              className={
                filtro === cat
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground"
              }
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Productos */}
        {cargando ? (
          <p className="text-center text-muted-foreground py-20">Cargando productos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productosFiltrados.map((producto) => {
              const enCarrito = carrito.find((i) => i.producto.id === producto.id)
              return (
                <div
                  key={producto.id}
                  className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-primary font-medium tracking-widest">
                      {producto.categoria}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-foreground mt-1 mb-1">
                      {producto.nombre}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {producto.descripcion}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        ${producto.precio.toFixed(2)}
                      </span>

                      {enCarrito ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => cambiarCantidad(producto.id, -1)}
                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="font-bold text-foreground w-4 text-center">
                            {enCarrito.cantidad}
                          </span>
                          <button
                            onClick={() => cambiarCantidad(producto.id, 1)}
                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => agregarAlCarrito(producto)}
                          className="bg-primary text-primary-foreground"
                        >
                          <ShoppingBag className="h-4 w-4 mr-2" />
                          Agregar
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Botón WhatsApp flotante */}
        {carrito.length > 0 && (
          <div className="fixed bottom-8 right-8">
            <Button
              onClick={pedirPorWhatsapp}
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg px-6 py-6 text-base rounded-full"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Pedir por WhatsApp — ${total.toFixed(2)}
            </Button>
          </div>
        )}

      </div>
    </div>
  )
}