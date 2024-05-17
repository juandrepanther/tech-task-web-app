import { IoArrowForwardOutline } from 'react-icons/io5'
import './button.scss'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: React.ReactNode
  type: 'navigate' | 'check' | 'submit'
  width?: string
  height?: string
  to?: string
}
export default function Button({ to, title, type, width = '17rem', height = '4rem' }: Props) {
  const navigate = useNavigate()

  const handle = () => {
    if (type === 'navigate') {
      navigate(to as string)
    } else if (type === 'check') {
      console.log('check')
    } else if (type === 'submit') {
      console.log('submit button pressed')
    }
  }

  return (
    <button
      type={type === 'submit' ? 'submit' : undefined}
      className="button"
      style={{ width, height }}
      onClick={handle}
    >
      <h2>{title}</h2>
      <IoArrowForwardOutline size={24} style={{ color: 'var(--primary-color)' }} />
    </button>
  )
}
