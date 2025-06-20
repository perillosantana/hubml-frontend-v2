import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'

export default function PublicLayout() {
  return (
    <main className="flex h-full flex-col pt-10">
      <Header />
      <Outlet />
    </main>
  )
}
