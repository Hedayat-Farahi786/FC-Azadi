import "./About.css"
import logo from "./images/logo.png"
import { text } from "./lang/text"

const About = ({ lang, myRef }) => {
  return (
    <div ref={myRef} className="about" id="#about">
        <div className="about__left">
            <h1 className="about__title">{text['aboutUs'][lang]}</h1>
            <div className="about__line"></div>
            <img className="about__logo" src={logo} alt="" />
        </div>   
        <div className="about__right">
        <div className="about__team"><h1>FC Azadi <small style={{marginLeft: "10px", color: "grey"}}>DRESDEN</small></h1> <img src={logo} alt="" /></div>
           <div className="about__teamline"></div>
            <p className="about__description">{text['aboutDesc'][lang]}</p>
            <h3>{text['executives'][lang]}</h3>
            <div className="exec__line"></div>
            <div className="execs">
            <div className="exec">
                <img className="exec__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU" alt="" />
                <h1 className="exec__name">Akbar Nurzai</h1>
                <div className="exec__socials">
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
            <div className="exec">
                <img className="exec__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU" alt="" />
                <h1 className="exec__name">Hedayat Farahi</h1>
                <div className="exec__socials">
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
            <div className="exec">
                <img className="exec__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU" alt="" />
                <h1 className="exec__name">Mohammad Hussain</h1>
                <div className="exec__socials">
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
        </div>   
       
    </div>
  )
}

export default About