import React from 'react'
import about from '../assets/images/about.jpg'
import '../style.css'

const About = () => {
  return <>
  <section className='about' id='about'>
    <h1 className='heading'>
        <span>About</span> us 
        </h1>
        <div className='row'>
            <div className='image'>
                <img src={about} alt='special'/>
            </div>
            <div className='content'>
                <h3>About Sindhri Restaurant and Bar B.Q</h3>
                <p>
                Welcome to Sindhri Restaurant and Bar B.Q, where every flavor tells a story. Our journey began in 1999, 
                with a vision to redefine the culinary experience in Sukkur city. Inspired by the rich heritage of 
                cuisine, we set out to create a place where traditional recipes meet modern flavors, and where every dish
                 is crafted with passion and authenticity.
                 <br/>

                </p>
                <p>
                At Sindhri, we believe that food is not just about sustenance, but a celebration of culture, family, 
                and togetherness. Each ingredient is carefully selected, each recipe perfected, to bring you a dining 
                experience that is truly unforgettable. Whether you're craving the sizzle of our signature barbequedishes, 
                the comfort of our home-style curries, or the freshness of our salads and appetizers, our menu offers a 
                delightful selection to satisfy every palate.From our kitchen to your table, every dish is prepared with love,
                because at Sindhri, we don't just serve food, we create memories.


                </p>
                <a href='#' className='btn'>
                    Learn More
                </a>
            </div>
        </div>
  </section>
  </>
}

export default About;