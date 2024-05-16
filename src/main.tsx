import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { ThemeProvider } from './context/theme-context'
import Appbar from './components/appbar/appbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Appbar />
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>,
)
