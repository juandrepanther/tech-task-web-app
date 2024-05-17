import { useEffect } from 'react'
import { useAppStore } from '../../store/store'
import './modal.scss'

export default function Modal() {
  const { isOpenModal } = useAppStore()

  // disable scroll when modal is opened

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpenModal])

  return (
    <div className={` overlay animated ${isOpenModal ? 'show' : ''}`}>
      <div className="modal">Hello</div>
    </div>
  )
}
