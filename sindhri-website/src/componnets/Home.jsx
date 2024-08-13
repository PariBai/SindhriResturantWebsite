import React from 'react';
import '../style.css';
import Reviews from './Reviews.jsx';
import About from './About.jsx';

const Home = () => {
  return (
    <>
      <section className='home' id='home'>
        <div className='content'>
          <h3>
            Sindhri Resturant & Bar B.Q
          </h3>
          <p>
            Where Every Flavor Tells a Story
          </p>
          <a href='#' className='btn'>
            Get Yours Now
          </a>
        </div>
      </section>
      <About/>
      <Reviews />
    </>
  );
};

export default Home;
