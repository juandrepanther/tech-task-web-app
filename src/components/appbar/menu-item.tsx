import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SelectedMenuType, MenuType } from '../../types'

interface Props {
  menu: MenuType
}
export const MenuItem = ({ menu: { url, menuItem } }: Props) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [selectedStyle, setSelectedStyle] = useState<SelectedMenuType>('')

  const selectPage = () => navigate(url)

  // change menu item style class name based on the pathname url

  useEffect(() => {
    if (pathname === url) {
      setSelectedStyle('selected__menu__item')
    } else {
      setSelectedStyle('')
    }
  }, [pathname, url])

  return (
    <div onClick={selectPage} className={`appbar__menu__item ${selectedStyle}`}>
      {menuItem}
    </div>
  )
}
