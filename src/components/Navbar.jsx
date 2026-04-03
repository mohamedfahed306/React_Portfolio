import { useEffect } from 'react';
import {Link} from 'react-scroll'
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (navbar) {
        navbar.classList.toggle("sticky", window.scrollY > 80);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup (VERY IMPORTANT)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className='navbar'>
        <div className="logo"><Link to='home'>Fahed</Link></div>
        <div className="nav-links">
            <Link to='home'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='project'>Project</Link>
            <Link to='testimonals'>Testimonals</Link>
            <Link to='contact'>Contact</Link>
        </div>
        <div className="nav-icons">
          <i class="ri-sun-fill"></i>
          <i class="ri-menu-2-line active"></i>

        </div>
        
    </div>
  )
}

export default Navbar