import { MdOutlineClose } from 'react-icons/md'
import { menu } from '../menu-urls'
import { MenuItem } from '../menu-item'
import './mobile-appbar.scss'

interface Props {
  setIsOpenMobileMenu: (isOpenMobileMenu: boolean) => void
}
export default function MobileAppbar({ setIsOpenMobileMenu }: Props) {
  const closeMobileMenu = () => setIsOpenMobileMenu(false)

  return (
    <nav className="mobile__appbar__container">
      <div className="mobile__appbar__top">
        <MdOutlineClose size={32} onClick={closeMobileMenu} style={{ cursor: 'pointer' }} />
      </div>
      <div className="mobile__appbar__menu__items">
        <div>
          {menu.map((item, i) => (
            <MenuItem setIsOpenMobileMenu={setIsOpenMobileMenu} menu={item} key={i} />
          ))}
        </div>
      </div>
    </nav>
  )
}
