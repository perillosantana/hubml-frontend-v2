import { createBrowserRouter } from 'react-router-dom'
import { RequireAuth } from './components/RequireAuth'
import AdminLayout from './layout/AdminLayout'
import LoginLayout from './layout/LoginLayout'
import PublicLayout from './layout/PublicLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/admin/Dashboard'
import Products from './pages/admin/Products'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    path: '/auth',
    element: <LoginLayout />,
    children: [{ path: 'sign-in', element: <Login /> }],
  },
  {
    path: '/admin',
    element: (
      <RequireAuth>
        <AdminLayout />
      </RequireAuth>
    ),
    children: [
      { path: '/admin', element: <Dashboard /> },
      { path: '/admin/products', element: <Products /> },
    ],
  },
])
