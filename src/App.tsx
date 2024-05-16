import { useAppStore } from './store/store'
import './global.scss'

export default function App() {
  const { theme } = useAppStore()

  return (
    <div>
      <h3>Happy coding! With Zustand. Theme is: {theme}</h3>
    </div>
  )
}
