import { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { MdOutlineDone } from 'react-icons/md'
import { BsFillSignStopFill } from 'react-icons/bs'
import { FaHandPaper } from 'react-icons/fa'
import { MdErrorOutline } from 'react-icons/md'
import { MessageType, TimezoneData } from '../../types'
import { getTimeZones } from '../../utils/requests'
import { getHoursFromTimestamp } from '../../utils/helpers'
import './modal.scss'

interface Props {
  type: 'check' | 'send'
  title?: string
  description?: string
  setIsOpen: (isOpen: boolean) => void
  isOpenModal: boolean
}

export default function Modal({ title, description, type, setIsOpen, isOpenModal }: Props) {
  const [timezone_LV, setTimezone_LV] = useState<TimezoneData>()
  const [message, setMessage] = useState<MessageType>(MessageType.NONE)

  const closeModal = () => setIsOpen(false)

  //disable scroll when modal is opened

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpenModal, type])

  // fetch data from API

  useEffect(() => {
    if (type === 'check') {
      getTimeZones()
        .then((data) => {
          setTimezone_LV(data)
        })
        .catch((err) => {
          setMessage(MessageType.ERROR)
          console.log(err)
        })
    }
  }, [type])

  // check the availability b ase on the received data

  useEffect(() => {
    if (
      timezone_LV &&
      timezone_LV.day_of_week >= 1 &&
      timezone_LV.day_of_week <= 5 &&
      getHoursFromTimestamp(timezone_LV.datetime) >= 7 &&
      getHoursFromTimestamp(timezone_LV.datetime) <= 18
    ) {
      setMessage(MessageType.OPEN)
    } else {
      setMessage(MessageType.CLOSE)
    }
  }, [timezone_LV])

  // use icon based on the message type

  const AvailabilityIcon = () => {
    switch (message) {
      case MessageType.OPEN:
        return <MdOutlineDone color="green" size={32} />
      case MessageType.CLOSE:
        return <BsFillSignStopFill color="darkred" size={32} />
      case MessageType.ERROR:
        return <MdErrorOutline color="darkred" size={32} />
      default:
        return <FaHandPaper size={32} />
    }
  }

  return (
    <div className={` overlay animated ${isOpenModal ? 'show' : ''}`}>
      <div className="modal">
        <div className="modal__close">
          <MdOutlineClose size={32} onClick={closeModal} />
        </div>
        <div className="modal__content">
          <h2>{title}</h2>
          {type === 'check' && (
            <>
              <h3>{message}</h3>
              <AvailabilityIcon />
            </>
          )}
          {type === 'send' && (
            <>
              <p>{description}</p>
              <MdOutlineDone size={44} color="green" />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
