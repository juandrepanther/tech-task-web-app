import { useEffect, useState } from 'react'
import Button from '../../components/button/button'
import Modal from '../../components/modal/modal'

const initialFormData = {
  name: '',
  email: '',
  message: '',
}

interface IonChangeHandler {
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  type: 'name' | 'email' | 'message'
}
export default function Form() {
  const [isOpenSendModal, setIsOpenSendModal] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [formData, setFormData] = useState(initialFormData)

  const onChangeHandler = ({ e, type }: IonChangeHandler) => {
    e.preventDefault()
    setFormData({ ...formData, [type]: e.target.value })
  }

  // check if all required field are filled

  useEffect(() => {
    if (formData.name && formData.email && formData.message) {
      setIsFilled(true)
    } else {
      setIsFilled(false)
    }
  }, [formData])

  // in the console log you can see the data of the form sent

  const openSendModal = () => {
    console.log({ Sender: formData.name, Email: formData.email, Message: formData.message })
    setIsOpenSendModal(true)
  }

  return (
    <>
      <form>
        <div className="input__wrapper">
          <input
            onChange={(e) => onChangeHandler({ e, type: 'name' })}
            required
            name="name"
            type="text"
            placeholder="Vārds"
          />
          <input
            onChange={(e) => onChangeHandler({ e, type: 'email' })}
            required
            name="email"
            type="email"
            placeholder="E-pasts"
          />
        </div>
        <textarea
          onChange={(e) => onChangeHandler({ e, type: 'message' })}
          required
          wrap="hard"
          name="message"
          placeholder="Tava vēstule"
        ></textarea>
      </form>
      <div className="contacts__button__wrapper">
        <Button type="submit" onClick={openSendModal} disabled={!isFilled} title="Sūtīt" />
      </div>

      <Modal
        isOpenModal={isOpenSendModal}
        setIsOpen={setIsOpenSendModal}
        type="send"
        title="Aizsūtīts!"
        description="Esam saņēmuši Tavu ziņu un atbildēsim uz to tuvāko 24 stundu laikā. Jauku dienu!"
      />
    </>
  )
}
