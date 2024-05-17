import GridBox from '../../components/grid-box/grid-box'
import location_img from '../../assets/location.png'
import './contacts.scss'
import Button from '../../components/button/button'
export default function Contacts() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    console.log(name, email, message)
  }

  return (
    <div className="container page contacts">
      <section>
        <h2>Mūs var atrast</h2>

        <GridBox>
          <div className="contacts__location">
            <div className="image__wrapper">
              <img
                loading="lazy"
                className="zoomInOutEffect"
                src={location_img}
                alt="location-image"
              />
            </div>
          </div>
          <div className="contacts_credentials">
            <h3>
              <b>If Centrālais birojs: </b>Republikas laukums 2A, Rīga, LV-1010
            </h3>
            <h3>
              <b>Zvani:</b> 67 338 333
            </h3>
            <h3>
              <b>E-pasts:</b>
              <a href="mailto:info@if.lv">info@if.lv</a>
            </h3>
          </div>
        </GridBox>

        <GridBox>
          <div>
            <h2>Pārbaudi pieejamību</h2>
            <p>Mūsu darba laiks: no 7.00 līdz 18.00</p>
            <div className="contacts__button__wrapper">
              <Button title="Pārbaudīt" type="check" />
            </div>
          </div>
          <div className="contacts_credentials">
            <h2>Sazinies ar mums</h2>
            <form onSubmit={handleSubmit}>
              <div className="input__wrapper">
                <input name="name" type="text" placeholder="Vārds" />
                <input name="email" type="email" placeholder="E-pasts" />
              </div>
              <textarea wrap="hard" name="message" placeholder="Tava vēstule"></textarea>
              <div className="contacts__button__wrapper">
                <Button title="Sūtīt" type="submit" />
              </div>
            </form>
          </div>
        </GridBox>
      </section>
    </div>
  )
}
