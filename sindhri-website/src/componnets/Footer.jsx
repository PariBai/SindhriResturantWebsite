import React from 'react'
import instaIcon from '../assets/images/instaIcon.jpg'
import fbIcon from '../assets/images/fbIcon.png'


const Footer = () => {
  return <>
  <section className='footer'>
    <div className='share'>
    <a href='https://www.instagram.com/sindhrirestaurant/?hl=en' target='_blank' >
   <img src={instaIcon} alt='Instagram' />
   </a>
   <a href='https://www.facebook.com/sindhrirestaurantofficial/' target='_blank' >
   <img src={fbIcon} alt='Facebook' />
   </a>

    </div>
    <div className="credit">
  Phone No: <span>0300 2986698</span> <br></br>
  Address: <span id='wt'>Main Shikarpur Road, Sukkur, Sindh</span>
  Hours: <span id='wt'>7 am to 1 am</span>
</div>

  </section>
  </>
}

export default Footer;