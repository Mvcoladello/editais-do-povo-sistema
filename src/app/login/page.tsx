import LoginForm from "@/components/LoginForm"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center mb-6">
          <Image src="/logo.svg" alt="Editais do Povo" width={120} height={40} className="w-auto h-10" />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Acesse sua conta</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Ou{" "}
          <Link href="/registro" className="font-medium text-blue-600 hover:text-blue-500">
            crie uma conta gratuita
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <LoginForm />
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Ao fazer login, você concorda com nossos{" "}
          <Link href="/termos" className="font-medium text-blue-600 hover:text-blue-500">
            Termos de Serviço
          </Link>{" "}
          e{" "}
          <Link href="/privacidade" className="font-medium text-blue-600 hover:text-blue-500">
            Política de Privacidade
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

