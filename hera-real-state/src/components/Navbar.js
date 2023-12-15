import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/properties'>Lots & Properties</Link>
          </li>
          <li>
            <Link to='/properties'>About Us</Link>            
          </li>
          <li>
            <Link to='/properties'>Contact Us</Link>                      
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;