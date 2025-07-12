import { AtSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Login() {
  return (
    <div className="flex flex-col items-center space-y-8 rounded-md px-4 py-8">
      <Link to="/">
        <h1 className="text-2xl font-semibold tracking-tight">HubML</h1>
      </Link>

      <Button variant="outline">
        <Link
          to={`${import.meta.env.VITE_BACKEND_URL}/auth/google`}
          className="flex items-center gap-2"
        >
          <AtSign size={16} aria-hidden="true" />
          Login com Google
        </Link>
      </Button>

      <div className="mt-3 text-center text-xs">
        <p>
          Ao usar nossa plataforma, você concorda com nossos <br />
          <Link to="/termos" className="hover:text-primary underline underline-offset-4">
            Termos e Condições
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
