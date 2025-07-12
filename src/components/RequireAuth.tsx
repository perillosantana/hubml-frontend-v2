import type { JSX } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { loading, authenticated } = useAuth()
  const location = useLocation()

  if (loading) return

  if (!authenticated) {
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />
  }

  return children
}
