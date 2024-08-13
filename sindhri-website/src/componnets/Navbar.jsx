import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/sindhri-logo.jpg';
import searchIcon from '../assets/images/searchIcon.png';
import shoppingCart from '../assets/images/shoppingCart.png';
import menuIcon from '../assets/images/menuIcon.png';
import '../style.css';

const Navbar = () => {
  const searchHandler = () => {
    //  searchRef.current.classList.toggle("active");
  };

  return (
    <>
      <header className='header'>
        <Link to='/' className='logo'>
          <img src={Logo} alt='' />
        </Link>

        <nav className='navbar'>
          <Link to='/'>Home</Link>
          
          <Link to='/menu'>Menu</Link>
          <Link to='/reservation'>Reservation</Link>
          
         
          <Link to='/contact'>Contact</Link>
          <Link to='/team'>Chefs</Link>
        </nav>
        <div className='icons'>
          <img id='searchIcon' src={searchIcon} onClick={searchHandler} />
          <img id='shoppingCart' src={shoppingCart} />
          <img src={menuIcon} id='menu-btn' />
        </div>

       
      </header>
    </>
  );
};

export default Navbar;
