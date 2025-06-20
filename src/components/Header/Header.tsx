import { LogIn } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export const Header = () => {
  return (
    <header>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link to="/" className="text-ml-500 block font-sans text-xl font-bold antialiased">
              HubML
            </Link>
          </div>

          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <Link to="/auth/sign-in">Entrar</Link>
            </div>

            <Button variant="ml">
              <Link to="/auth/sign-in">Cadastre-se</Link>
            </Button>

            <div className="-mr-1 md:hidden">
              <LogIn size={26} className="text-white" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
