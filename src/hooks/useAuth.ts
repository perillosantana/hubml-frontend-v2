import { useEffect, useState } from 'react'

export function useAuth() {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/auth/check', {
      credentials: 'include',
    })
      .then(res => {
        if (res.status === 204) return setAuthenticated(true)

        throw new Error('Unauthorized')
      })
      .catch(() => setAuthenticated(false))
      .finally(() => setLoading(false))
  }, [])

  return { loading, authenticated }
}
