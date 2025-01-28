import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Bem-vindo ao <span className="text-blue-600">Editais do Povo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Acompanhe todas as oportunidades em concursos e licitações no seu painel personalizado.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors text-lg px-8 py-3 rounded-full">
            <Search className="mr-2 h-5 w-5" /> Explorar Editais
          </Button>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <Image
            src="/placeholder.svg"
            alt="Dashboard Illustration"
            width={600}
            height={400}
            className="relative z-10 rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

