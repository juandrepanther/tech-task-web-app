import Card from '../../components/card/card'
import { Cards } from './data'
import './details.scss'

export default function Details() {
  return (
    <div className="container page details">
      <section>
        <h2>Vienmēr un vajadzīgajā brīdī</h2>
        <div className="cards__wrapper">
          {Cards.map((card) => (
            <Card {...card} key={card.title} />
          ))}
        </div>
      </section>
    </div>
  )
}
