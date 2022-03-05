import "./Footer.css"
import { text } from "./lang/text"

const Footer = ({lang}) => {
  return (
    <div className='footer'>{new Date().getFullYear()} - FC Azadi Dresden © {text['footerText'][lang]}</div>
  )
}

export default Footer