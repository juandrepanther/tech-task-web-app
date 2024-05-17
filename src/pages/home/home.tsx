import GridBox from '../../components/grid-box/grid-box'
import './home.scss'
import hero_1_img from '../../assets/hero_1.jpg'

export const Home = () => {
  return (
    <div className="container page home">
      <section className="">
        <h2>Mēs Tev piedāvājam</h2>
        <GridBox>
          <div className="home__text">
            <h3>Drošību</h3>
            <h3>Garantiju</h3>
            <h3>Pārliecību</h3>
            <h3>Izdevīgus un piemērotus piedāvājumus</h3>
          </div>
          <div className="image__wrapper">
            <img loading="lazy" className="zoomInOutEffect" src={hero_1_img} alt="hero image" />
          </div>
        </GridBox>
      </section>
    </div>
  )
}
