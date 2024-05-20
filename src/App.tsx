import { lazy, useContext, useEffect, Suspense } from 'react'
import { ThemeContext } from './context/theme-context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Appbar from './components/appbar/appbar'

const Home = lazy(() => import('./pages/home/home'))
const Details = lazy(() => import('./pages/details/details'))
const Contacts = lazy(() => import('./pages/contacts/contacts'))

import './styles/_themes.scss'
import './styles/_common.scss'

export default function App() {
  const { darkTheme } = useContext(ThemeContext)

  // change theme based on the context state

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])

  return (
    <BrowserRouter>
      <Appbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
