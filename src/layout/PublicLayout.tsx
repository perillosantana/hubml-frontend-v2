import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'

export default function PublicLayout() {
  return (
    <main className="flex h-full flex-col py-10">
      <Header />
      <Outlet />
    </main>
  )
}
