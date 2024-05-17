import { useEffect, useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { MenuItem } from './menu-item'
import { menu } from './menu-urls'
import { AppBarHideType, Device, Theme } from '../../types'
import ToggleSwitch from './toggle-switch'
import useWindowSize from '../../hooks/useWindowSize'
import useScrollDirection from '../../hooks/useScrollDirection'
import MobileAppbar from './mobile-appbar'
import if_logo from '../../assets/if_logo.png'

import './appbar.scss'
export default function Appbar() {
  const [device, setDevice] = useState<Device>(Device.DESKTOP)
  const [isHidden, setIsHidden] = useState<AppBarHideType>('')
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
  const { width } = useWindowSize()
  const scrollDirection = useScrollDirection('up')

  // set device based on window size

  useEffect(() => {
    if (width && width < 900) {
      setDevice(Device.MOBILE)
    } else {
      setDevice(Device.DESKTOP)
    }
  }, [width])

  // disable scrolling when mobile menu is open

  useEffect(() => {
    if (isOpenMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpenMobileMenu])

  // collapse partly visible appbar when scrolling down

  useEffect(() => {
    if (scrollDirection === 'down') {
      setIsHidden('appbar__hide')
    } else {
      setIsHidden('')
    }
  }, [scrollDirection])

  const toggleMobileMenu = () => setIsOpenMobileMenu(!isOpenMobileMenu)

  return (
    <>
      <div className={`appbar ${isHidden}`}>
        <div className="container page appbar__top">
          <div className="appbar__menu__container">
            {device === Device.DESKTOP ? (
              <div className="appbar__menu__items__wrapper">
                {menu.map((item, i) => (
                  <MenuItem menu={item} key={i} />
                ))}
              </div>
            ) : (
              <CiMenuFries size={32} style={{ cursor: 'pointer' }} onClick={toggleMobileMenu} />
            )}
            <div>
              <ToggleSwitch optionLabels={[Theme.DARK, Theme.LIGHT]} />
            </div>
          </div>
        </div>
        <div className="appbar__bottom">
          <div className="container page appbar__bottom__text_logo">
            <img className="appbar__logo" loading="lazy" src={if_logo} alt="if_logo" />
            <h2
              style={{
                transition: 'all 0.3s ease-in-out',
                opacity: scrollDirection === 'down' ? 0 : 1,
              }}
            >
              Vienmēr Tavs Apdrošinātājs
            </h2>
          </div>
        </div>
      </div>
      {isOpenMobileMenu && <MobileAppbar setIsOpenMobileMenu={setIsOpenMobileMenu} />}
    </>
  )
}
