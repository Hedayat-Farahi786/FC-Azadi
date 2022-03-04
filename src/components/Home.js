import "./Home.css"
import homeImg from "./images/home-img.png"
import image from "./images/image-1.jpg"

const Home = () => {
  return (
    <div className='home'>
        <div className="home__left">
            <h1 className="home__title">Home</h1>
            <hr className="home__line" />
            <p className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto, odit eligendi esse mollitia consequatur minima illum ducimus exercitationem itaque earum sint velit dignissimos vitae facere veniam. Iure id, veniam accusantium possimus harum sint esse eaque eligendi iste facilis deleniti magni ex. Omnis dignissimos inventore facere at doloribus totam tenetur.</p>
            <img className="home__img" src={image} alt="" />
        </div>
        <div className="home__right">
            <img className="logo" src={homeImg} alt="" />
        </div>
    </div>
  )
}

export default Home