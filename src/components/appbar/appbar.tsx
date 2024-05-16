import { CiMenuFries } from 'react-icons/ci'
import { MenuItem } from './menu-item'
import { menu } from './menu-urls'
import './appbar.scss'

export default function Appbar() {
  return (
    <div className="appbar">
      <div className="container page appbar__top">
        <div className="appbar__menu__wrapper">
          {menu.map((item, i) => (
            <MenuItem menu={item} key={i} />
          ))}
        </div>
      </div>
      <div className="appbar__bottom">
        <div className="container page">
          2 <CiMenuFries size={32} />
        </div>
      </div>
    </div>
  )
}
