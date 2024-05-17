import { IoArrowForwardOutline } from 'react-icons/io5'
import './button.scss'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: React.ReactNode
  type: 'navigate' | 'check' | 'submit'
  width?: string
  height?: string
  to?: string
  onClick?: () => void
  disabled?: boolean
}
export default function Button({
  disabled,
  to,
  title,
  type,
  width = '17rem',
  height = '4rem',
  onClick,
}: Props) {
  const navigate = useNavigate()

  const handle = () => {
    if (type === 'navigate') {
      navigate(to as string)
    }
  }

  return (
    <div onClick={onClick}>
      <button
        disabled={disabled}
        type={type === 'submit' ? 'submit' : undefined}
        className="button"
        style={{ width, height }}
        onClick={handle}
      >
        {disabled ? <h2>Aizpildi formu</h2> : <h2>{title}</h2>}
        <IoArrowForwardOutline size={24} style={{ color: 'var(--primary-color)' }} />
      </button>
    </div>
  )
}
