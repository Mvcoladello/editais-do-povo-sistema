import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

export default function HighlightsSection() {
  const highlights = [
    { name: "Concurso Público Prefeitura de São Paulo", deadline: "15/08/2025", location: "São Paulo, SP" },
    { name: "Licitação Obras Públicas Rio de Janeiro", deadline: "22/08/2025", location: "Rio de Janeiro, RJ" },
    { name: "Concurso Tribunal de Justiça de Minas Gerais", deadline: "30/08/2025", location: "Belo Horizonte, MG" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Concursos e Licitações em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">{highlight.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2 text-gray-600">
                  <Calendar className="mr-2 h-4 w-4" />
                  <p>Prazo: {highlight.deadline}</p>
                </div>
                <div className="flex items-center mb-4 text-gray-600">
                  <MapPin className="mr-2 h-4 w-4" />
                  <p>Local: {highlight.location}</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Ver Mais Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

