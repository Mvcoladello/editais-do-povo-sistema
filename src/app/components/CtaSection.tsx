import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Pronto para começar?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Junte-se a milhares de usuários e encontre as melhores oportunidades.
        </p>
        <Button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors text-lg px-8 py-3 rounded-full">
          Criar Conta Gratuita
        </Button>
      </div>
    </section>
  )
}

