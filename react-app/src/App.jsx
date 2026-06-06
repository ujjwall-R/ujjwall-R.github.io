import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Read from './pages/Read/Read'
import Build from './pages/Build/Build'
import Workout from './pages/Workout/Workout'
import Click from './pages/Click/Click'
import NotFound from './pages/NotFound/NotFound'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/',        element: <Home /> },
      { path: '/read',    element: <Read /> },
      { path: '/build',   element: <Build /> },
      { path: '/workout', element: <Workout /> },
      { path: '/click',   element: <Click /> },
      { path: '*',        element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
