import type { JSX } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuthenticated = !!localStorage.getItem('token')
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />
  }

  return children
}
