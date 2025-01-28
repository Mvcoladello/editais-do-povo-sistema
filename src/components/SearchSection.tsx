import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SearchSection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Encontre Editais Personalizados</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Localização" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sp">São Paulo</SelectItem>
                <SelectItem value="rj">Rio de Janeiro</SelectItem>
                <SelectItem value="mg">Minas Gerais</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="concursos">Concursos Públicos</SelectItem>
                <SelectItem value="licitacoes">Licitações</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Palavras-chave" className="w-full" />
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">Buscar Agora</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

