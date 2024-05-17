import { useContext, useEffect } from 'react'
import { Home } from './pages/home/home'
import { ThemeContext } from './context/theme-context'
import Details from './pages/details/details'
import Contacts from './pages/contacts/contacts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Appbar from './components/appbar/appbar'

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}
