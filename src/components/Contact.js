import React from "react";
import "./Contact.css";
import contact from "./images/contact.png";
import { text } from "./lang/text";

const Contact = ({ lang, myRef }) => {
  return (
    <div ref={myRef} id="contact" className="contact">
      
      <div className="contact__left">
      <h1>{text['GetInTouch'][lang]}</h1>
      <div className="contact__line"></div>
       <div className="contact__form">
       <div className="name__input">
          <label htmlFor="name">{text['name'][lang]}</label>
          <input type="text"/>
        </div>
        <div className="email__input">
          <label htmlFor="email">{text['email'][lang]}</label>
          <input type="email"/>
        </div>
        <div className="message__input">
          <label htmlFor="message">{text['message'][lang]}</label>
          <textarea name="message"></textarea>
        </div>
        <button className="contact__button">{text['send'][lang]}</button>
        </div>
      </div>
      <div className="contact__right">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.15673652326!2d13.74693471542804!3d51.0501936518499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4171906165475f75%3A0x3b7738af6f1644c8!2sMarie-Curie-Gymnasium%20Dresden!5e0!3m2!1sen!2sde!4v1646433906635!5m2!1sen!2sde" width={600} height={450} style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
    </div>
    </div>
  );
};

export default Contact;
