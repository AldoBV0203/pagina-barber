//el pie de pagina

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  productos: [
    { name: "Pomadas", href: "#" },
    { name: "Ceras", href: "#" },
    { name: "Geles", href: "#" },
    { name: "Pastas", href: "#" },
    { name: "Máquinas", href: "#" },
    { name: "Accesorios", href: "#" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Trabaja con nosotros", href: "#" },
    { name: "Colaboraciones", href: "#" },
  ],
  soporte: [
    { name: "Contacto", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Envíos", href: "#" },
    { name: "Devoluciones", href: "#" },
  ],
  legal: [
    { name: "Términos y Condiciones", href: "#" },
    { name: "Política de Privacidad", href: "#" },
    { name: "Cookies", href: "#" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer id="contacto" className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="font-serif text-2xl font-bold tracking-wider text-primary">
                BLADE<span className="text-foreground">&</span>CROWN
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Tu destino para productos premium de barbería. 
              Calidad profesional para el caballero moderno.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-foreground mb-4">
              Productos
            </h3>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-foreground mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-foreground mb-4">
              Soporte
            </h3>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Blade & Crown. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <span className="text-sm text-muted-foreground">
                Aceptamos:
              </span>
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-xs border border-border px-2 py-1 rounded">VISA</span>
                <span className="text-xs border border-border px-2 py-1 rounded">MC</span>
                <span className="text-xs border border-border px-2 py-1 rounded">AMEX</span>
                <span className="text-xs border border-border px-2 py-1 rounded">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
