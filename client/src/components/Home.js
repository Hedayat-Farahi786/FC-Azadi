import "./Home.css"
import homeImg from "./images/home-img.png"
import image from "./images/image-1.jpg"
import { text } from "./lang/text"

const Home = ({lang, myRef}) => {
  return (
    <div ref={myRef} id="#home" className='home'>
        <div className="home__left">
            <h1 className="home__title">{text['home'][lang]}</h1>
            <div className="home__line"></div>
            <p className="home__description">{text['homeDesc'][lang]}</p>
            <img className="home__img" src={image} alt="" />
        </div>
        <div className="home__right">
            <img className="logo" src={homeImg} alt="" />
        </div>
    </div>
  )
}

export default Home