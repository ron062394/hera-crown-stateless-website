import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
      <nav className="navbar">
        <img src="https://i.postimg.cc/htfHwkdv/hera-logo.png" alt="" />
        <ul className="nav-links">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/properties'>Lots & Properties</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>            
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>                      
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;