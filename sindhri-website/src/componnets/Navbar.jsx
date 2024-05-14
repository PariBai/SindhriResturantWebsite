import React, {useRef} from 'react'
import Logo from '../assets/images/sindhri-logo.jpg'
import searchIcon from '../assets/images/searchIcon.png'
import shoppingCart from '../assets/images/shoppingCart.png'
import menuIcon from '../assets/images/menuIcon.png'
import '../style.css'
const Navbar = () => {
    const searchHandler = () =>{
      //  searchRef.current.classList.toggle("active");

    };
  return (
    <>
    <header className='header'>
    <a href='#' className='logo'>
        <img src={Logo} alt=""/>
    </a>
    
    <nav className='navbar'>
        <a href='#Home'>Home</a>
        <a href='#About'>About</a>
        <a href='#Menu'>Menu</a>
        <a href='#Reservation'>Reservation</a>
        <a href='#Gallery'>Gallery</a>
        <a href='#Reviews'>Reviews</a>
        <a href='#Contact'>Contact</a>
        <a href='#Team'>Team</a>
    </nav>
    <div className='icons'>
        
            <img id='searchIcon' src={searchIcon} onClick={searchHandler}/>
        
        
        <img id='shoppingCart' src={shoppingCart}/>
        

        
        <img src={menuIcon} id="menu-btn"  />
       
    </div>
    
        <div className='search-form' >
        <input type="search" placeholder="Search here..."
        id="search-box"></input>
        <label htmlFor='search-box' className='fas fa-search'></label>
    </div>
    </header>
    </>
  )
}
export default Navbar;
