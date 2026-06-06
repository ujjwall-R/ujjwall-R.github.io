import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Read from './pages/Read/Read'
import Build from './pages/Build/Build'
import Workout from './pages/Workout/Workout'
import Click from './pages/Click/Click'
import NotFound from './pages/NotFound/NotFound'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/',        element: <Navigate to="/read" replace /> },
      { path: '/read',    element: <Read /> },
      { path: '/build',   element: <Build /> },
      { path: '/sweat',   element: <Workout /> },
      { path: '/click',   element: <Click /> },
      { path: '*',        element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
