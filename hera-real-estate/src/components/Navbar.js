import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
      <div className="header">
        <nav className="navbar">
        <img src="https://i.postimg.cc/0NNqk55q/345-C0248-AB01-4-F1-B-B66-F-434-CEE7077-AD.png" alt="" />
        <ul className="nav-links">
          <li className='secondary-color'>
            <Link to='/'>Home</Link>
          </li>
          <li className='secondary-color'>
            <Link to='/properties'>Lots & Properties</Link>
          </li>
          <li className='secondary-color'>
            <Link to='/about'>About Us</Link>            
          </li>
          <li className='secondary-color'>
            <Link to='/contact'>Contact Us</Link>                      
          </li>
        </ul>
      </nav>

      </div>
      
    );
  };
  
  export default Navbar;