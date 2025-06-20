import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full max-w-[350px] flex-col justify-center space-y-6">
        <Outlet />
      </div>
    </main>
  )
}
