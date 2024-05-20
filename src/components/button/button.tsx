import { IoArrowForwardOutline } from 'react-icons/io5'
import './button.scss'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../context/theme-context'

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
  const { darkTheme } = useContext(ThemeContext)

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
        style={{
          width,
          height,
          backgroundColor: type === 'submit' ? 'var(--primary-color)' : '',
        }}
        onClick={handle}
      >
        {disabled ? (
          <h2>Aizpildi formu</h2>
        ) : (
          <h2 className={darkTheme ? 'button_title_hover_dark' : 'button_title'}>{title}</h2>
        )}
        <IoArrowForwardOutline
          size={24}
          style={{ color: type !== 'submit' ? 'var(--primary-color)' : '#fff' }}
        />
      </button>
    </div>
  )
}
