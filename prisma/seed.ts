import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.producto.createMany({
    data: [
      {
        nombre: "Pomada Mate",
        descripcion: "Control total sin brillo. Acabado natural para looks modernos.",
        precio: 299.99,
        imagen: "/images/product-paste.jpg",
        categoria: "Pomadas",
        stock: 50,
      },
      {
        nombre: "Cera Moldeadora",
        descripcion: "Fijación fuerte con brillo. Ideal para estilos clásicos.",
        precio: 249.99,
        imagen: "/images/product-wax.jpg",
        categoria: "Ceras",
        stock: 40,
      },
      {
        nombre: "Gel Extremo",
        descripcion: "Máxima fijación para todo el día. Resistente al humidity.",
        precio: 199.99,
        imagen: "/images/product-gel.jpg",
        categoria: "Geles",
        stock: 60,
      },
      {
        nombre: "Pomada Brillante",
        descripcion: "Acabado brillante de alta gama. Inspirado en estilos vintage.",
        precio: 329.99,
        imagen: "/images/product-pomade.jpg",
        categoria: "Pomadas",
        stock: 35,
      },
      {
        nombre: "Clipper Profesional",
        descripcion: "Máquina de corte profesional. Motor potente y silencioso.",
        precio: 1299.99,
        imagen: "/images/product-clipper.jpg",
        categoria: "Herramientas",
        stock: 15,
      },
    ],
  })
  console.log("✅ Productos agregados correctamente")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())