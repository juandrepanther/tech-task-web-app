import './appbar.scss'
import { CiMenuFries } from 'react-icons/ci'

export default function Appbar() {
  return (
    <div className="appbar">
      <div className="container page appbar__top">1</div>
      <div className="appbar__bottom">
        <div className="container page">
          2 <CiMenuFries size={32} />
        </div>
      </div>
    </div>
  )
}
