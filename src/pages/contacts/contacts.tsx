import GridBox from '../../components/grid-box/grid-box'
import location_img from '../../assets/location.png'
import './contacts.scss'
export default function Contacts() {
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
      </section>
    </div>
  )
}
