import React, {useRef, useState} from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Gallery from './Gallery'
import Home from './Home'
import Navbar from './Navbar'

const Main = () => {
   const homeRef = useRef(null)
   const aboutRef = useRef(null)
   const galleryRef = useRef(null)
   const contactRef = useRef(null)

   const executeHomeScroll = () => homeRef.current.scrollIntoView()   
   const executeAboutScroll = () => aboutRef.current.scrollIntoView()   
   const executeGalleryScroll = () => galleryRef.current.scrollIntoView()   
   const executeContactScroll = () => contactRef.current.scrollIntoView()  
   
   
   const [lang, setLang] = useState('en');

  return (
    <div className='main'>
        <Navbar lang={lang} setLang={setLang} homeClick={executeHomeScroll} aboutClick={executeAboutScroll} galleryClick={executeGalleryScroll} contactClick={executeContactScroll}/>
        <Home lang={lang} myRef={homeRef}/>
        <About lang={lang} myRef={aboutRef}/>
        <Gallery lang={lang} myRef={galleryRef}/>
        <Contact lang={lang} myRef={contactRef}/>
        <Footer lang={lang} />
    </div>
  )
}

export default Main