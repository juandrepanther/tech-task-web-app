import { CardType } from '../../pages/details/data'
import './card.scss'

export default function Card({ description, image, title }: CardType) {
  return (
    <div className="card__container">
      <div className="card__img__wrapper">
        <img loading="lazy" className="zoomInOutEffect" src={image} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
