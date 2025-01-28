"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Editais do Povo
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/meus-editais" className="text-gray-600 hover:text-blue-600 transition-colors">
                Meus Editais
              </Link>
            </li>
            <li>
              <Link href="/ajuda" className="text-gray-600 hover:text-blue-600 transition-colors">
                Ajuda
              </Link>
            </li>
            <li>
              <Link href="/configuracoes" className="text-gray-600 hover:text-blue-600 transition-colors">
                Configurações
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
          >
            <Search className="mr-2 h-4 w-4" /> Buscar Editais
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-blue-600 transition-colors">
            Sair
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="container mx-auto px-4">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/meus-editais" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  Meus Editais
                </Link>
              </li>
              <li>
                <Link href="/ajuda" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  Ajuda
                </Link>
              </li>
              <li>
                <Link href="/configuracoes" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  Configurações
                </Link>
              </li>
              <li>
                <Link href="/sair" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  Sair
                </Link>
              </li>
            </ul>
            <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <Search className="mr-2 h-4 w-4" /> Buscar Editais
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

