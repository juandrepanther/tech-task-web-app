import GridBox from '../../components/grid-box/grid-box'
import hero_1_img from '../../assets/hero_1.jpg'
import video_bgd from '../../assets/video_bgd.mp4'
import Button from '../../components/button/button'
import './home.scss'

export default function Home() {
  return (
    <>
      <div className="container page home">
        <div>
          <video playsInline width="100%" src={video_bgd} autoPlay loop muted></video>
          <div className="overlay"></div>
        </div>

        <section>
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
          <h2>Aktuālākie apdrošināšanas produkti</h2>
          <div className="home__button__wrapper">
            <Button title="Apskatīties piedāvājumus" type="navigate" to="/details" />
          </div>
        </section>
      </div>
    </>
  )
}
