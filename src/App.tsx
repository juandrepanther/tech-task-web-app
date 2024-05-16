import { useContext, useEffect } from 'react'
import { Home } from './pages/home/home'
import { ThemeContext } from './context/theme-context'

import './styles/_themes.scss'
import './styles/_common.scss'

export default function App() {
  const { darkTheme } = useContext(ThemeContext)

  // change theme based on the context state

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])

  return (
    <>
      <Home />
    </>
  )
}
