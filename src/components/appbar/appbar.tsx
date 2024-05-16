import { useEffect, useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { MenuItem } from './menu-item'
import { menu } from './menu-urls'
import { Device, Theme } from '../../types'
import ToggleSwitch from './toggle-switch'
import useWindowSize from '../../hooks/useWindowSize'
import MobileAppbar from './mobile-appbar'

import './appbar.scss'
export default function Appbar() {
  const [device, setDevice] = useState<Device>(Device.DESKTOP)
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
  const { width } = useWindowSize()

  // set device based on window size

  useEffect(() => {
    if (width && width < 900) {
      setDevice(Device.MOBILE)
    } else {
      setDevice(Device.DESKTOP)
    }
  }, [width])

  const toggleMobileMenu = () => setIsOpenMobileMenu(!isOpenMobileMenu)

  return (
    <>
      <div className="appbar">
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
          <div className="container page">2</div>
        </div>
      </div>
      {isOpenMobileMenu && <MobileAppbar setIsOpenMobileMenu={setIsOpenMobileMenu} />}
    </>
  )
}
