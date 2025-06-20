import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Admin/Header'

export default function AdminLayout() {
  return (
    <div className="flex min-h-svh w-full">
      <Header />

      <>TESE</>
      <Outlet />
    </div>
  )
}
