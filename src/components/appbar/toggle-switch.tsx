import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/theme-context'
import './toggle-switch.scss'
interface Props {
  optionLabels: string[]
}

export default function ToggleSwitch({ optionLabels }: Props) {
  const [iscChecked, setIsChecked] = useState(false)
  const { toggleTheme } = useContext(ThemeContext)

  const changeTheme = () => {
    setIsChecked(!iscChecked)
    toggleTheme()
  }

  return (
    <div className="toggle-switch" onClick={changeTheme}>
      <input type="checkbox" className="toggle-switch-checkbox" checked={iscChecked} readOnly />
      <label className="toggle-switch-label">
        <span
          className="toggle-switch-inner"
          data-dark={optionLabels[0]}
          data-light={optionLabels[1]}
        />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  )
}
