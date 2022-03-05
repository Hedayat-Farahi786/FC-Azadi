import { useState } from "react";
import { text } from "./lang/text";
import "./Navbar.css";



const Navbar = ({ lang, setLang, homeClick, aboutClick, galleryClick, contactClick }) => {
  const [openLanguage, setOpenLanguage] = useState(false);

  const handleClick = (e) => {
    const items = document.querySelectorAll(".navbar__li");
    items.forEach((iterm) => {
      iterm.classList.remove("active");
      e.target.classList.add("active");
    });
  };

  return (
    <div className="navbar">
      <ul className="navbar__ul">
        <li
          onClick={(e) => {
            homeClick();
            handleClick(e);
          }}
          className="navbar__li active"
        >
          <a href="#home">{text['home'][lang]}</a>
        </li>
        <li
          onClick={(e) => {
            aboutClick();
            handleClick(e);
          }}
          className="navbar__li"
        >
          <a href="#about">{text['about'][lang]}</a>
        </li>
        <li
          onClick={(e) => {
            galleryClick();
            handleClick(e);
          }}
          className="navbar__li"
        >
          <a href="#gallery">{text['gallery'][lang]}</a>
        </li>
        <li
          onClick={(e) => {
            contactClick();
            handleClick(e);
          }}
          className="navbar__li"
        >
          <a href="#contact">{text['contact'][lang]}</a>
        </li>
      </ul>

      <div className="navbar__right">
        <svg
          className="navbar__icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() => setOpenLanguage(!openLanguage)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div
          className="langs"
          style={{ display: openLanguage ? "flex" : "none" }}
        >
          <p onClick={() => {setOpenLanguage(!openLanguage); setLang('en')}} className="lang">🇺🇸</p>
          <p onClick={() => {setOpenLanguage(!openLanguage); setLang('du')}} className="lang">🇩🇪</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
