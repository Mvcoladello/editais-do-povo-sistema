import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, Calendar, FileText, TrendingUp } from "lucide-react"

export default function DashboardSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Seu Resumo de Hoje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600">
                <FileText className="mr-2 h-5 w-5" />
                Total Monitorado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">15</p>
              <p className="text-gray-600">editais ativos</p>
              <Button variant="link" className="mt-2 p-0 h-auto text-blue-600">
                Ver detalhes
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-500">
                <AlertCircle className="mr-2 h-5 w-5" />
                Alertas Recentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">5</p>
              <p className="text-gray-600">novos concursos</p>
              <Button variant="link" className="mt-2 p-0 h-auto text-yellow-500">
                Ver alertas
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-green-500">
                <Calendar className="mr-2 h-5 w-5" />
                Prazos Importantes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2</p>
              <p className="text-gray-600">editais encerram amanhã</p>
              <Button variant="link" className="mt-2 p-0 h-auto text-green-500">
                Ver prazos
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-600">
                <TrendingUp className="mr-2 h-5 w-5" />
                Oportunidades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">8</p>
              <p className="text-gray-600">novas esta semana</p>
              <Button variant="link" className="mt-2 p-0 h-auto text-purple-600">
                Explorar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

