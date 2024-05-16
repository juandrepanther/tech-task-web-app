import './styles/_themes.scss'
import { Home } from './pages/home/home'
import { useContext, useEffect } from 'react'
import { ThemeContext } from './context/theme-context'

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
