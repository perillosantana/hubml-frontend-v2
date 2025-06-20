import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="flex h-svh flex-col border-r border-r-zinc-800 bg-zinc-900 px-5 py-2">
      <Link to="/admin/users">Usuários</Link>
      <Link to="/admin/settings">Configurações</Link>
    </nav>
  )
}
