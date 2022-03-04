import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <ul className="navbar__ul">
            <li className="navbar__li active">Home</li>
            <li className="navbar__li">About</li>
            <li className="navbar__li">Gallery</li>
            <li className="navbar__li">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar