import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      area: "Concursos Públicos",
      comment: "O Editais do Povo simplificou minha busca por oportunidades. Recomendo!",
      avatar: "/placeholder.svg",
    },
    {
      name: "João Santos",
      area: "Licitações",
      comment: "Ferramenta essencial para minha empresa. Economizamos tempo e recursos.",
      avatar: "/placeholder.svg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">A opinião dos nossos usuários</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex items-start space-x-4 p-6">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg text-blue-600">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{testimonial.area}</p>
                    <p className="text-gray-700">&quot;{testimonial.comment}&quot;</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

